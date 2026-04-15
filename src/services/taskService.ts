import { prisma } from "../utils/prisma.js";
import type { Prisma } from "@prisma/client";

import { sanitizeHtml } from "express-content-sanitizer";

export async function createTask(data: {
  title: string;
  description?: string;
  projectId: string;
  priority?: string;
  assigneeId?: string;
  createdById: string;
}) {
  const task = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description ? sanitizeHtml(data.description) : undefined,
      projectId: data.projectId,
      priority: data.priority || "medium",
      assigneeId: data.assigneeId || null,
      createdById: data.createdById,
    },
  });

  return task;
}

export async function getTask(id: string) {
  const task = await prisma.task.findUnique({
    where: { id },
    include: {
      comments: { orderBy: { createdAt: "asc" } },
      taskLabels: { include: { label: true } },
      project: true,
    },
  });

  return task;
}

export async function updateTask(id: string, data: Prisma.TaskUpdateInput) {
  const task = await prisma.task.update({
    where: { id },
    data: { ...data, updatedAt: new Date() },
  });

  return task;
}

export async function deleteTask(id: string) {
  await prisma.task.delete({ where: { id } });
}

export async function searchTasks(
  projectId: string,
  searchTerm: string,
  filters: { status?: string; priority?: string; assigneeId?: string },
  page: number = 1,
  pageSize: number = 20,
) {
  let whereClause = `WHERE t.project_id = '${projectId}'`;

  if (searchTerm) {
    whereClause += ` AND (t.title ILIKE '%${searchTerm}%' OR t.description ILIKE '%${searchTerm}%')`;
  }
  if (filters.status) {
    whereClause += ` AND t.status = '${filters.status}'`;
  }
  if (filters.priority) {
    whereClause += ` AND t.priority = '${filters.priority}'`;
  }
  if (filters.assigneeId) {
    whereClause += ` AND t.assignee_id = '${filters.assigneeId}'`;
  }

  const offset = (page - 1) * pageSize;

  const tasks = await prisma.$queryRawUnsafe(
    `SELECT t.*, p.title as project_title
     FROM tasks t
     JOIN projects p ON t.project_id = p.id
     ${whereClause}
     ORDER BY t.created_at DESC
     LIMIT ${pageSize} OFFSET ${offset}`,
  );

  return tasks;
}
