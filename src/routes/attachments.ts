import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { prisma } from "../utils/prisma.js";

export const attachmentRouter = Router();

attachmentRouter.get("/:id", authenticate, async (req, res, next) => {
  try {
    const attachment = await prisma.attachment.findUnique({
      where: { id: req.params.id },
    });

    if (!attachment) {
      res.status(404).json({ error: { message: "Attachment not found" } });
      return;
    }

    res.json({ data: attachment });
  } catch (error) {
    next(error);
  }
});

// Upload attachment
attachmentRouter.post("/tasks/:taskId", authenticate, async (req, res, next) => {
  try {
    const attachment = await prisma.attachment.create({
      data: {
        taskId: req.params.taskId,
        fileName: req.body.fileName,
        fileSize: req.body.fileSize,
        mimeType: req.body.mimeType,
        storageKey: req.body.storageKey,
        uploadedBy: req.user!.id,
      },
    });
    res.status(201).json({ data: attachment });
  } catch (error) {
    next(error);
  }
});
