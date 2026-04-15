var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');

// Create task
router.post('/', function(req, res) {
  taskService.createTask(req.body, function(err, task) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'failed to create task' });
      return;
    }
    res.status(201).json(task);
  });
});

// Get task by ID
router.get('/:id', function(req, res) {
  taskService.getTask(req.params.id, function(err, task) {
    if (err) {
      if (err.message === 'Task not found') {
        res.status(404).json({ error: 'not found' });
      } else {
        res.status(500).json({ error: 'server error' });
      }
      return;
    }
    res.json(task);
  });
});

// Update task
router.patch('/:id', function(req, res) {
  taskService.updateTask(req.params.id, req.body, function(err, task) {
    if (err) {
      if (err.message === 'Task not found') {
        res.status(404).json({ error: 'not found' });
        return;
      }
      res.status(500).json({ error: 'update failed' });
      return;
    }
    res.json(task);
  });
});

// Delete task
router.delete('/:id', function(req, res) {
  taskService.deleteTask(req.params.id, function(err) {
    if (err) {
      res.status(500).json({ error: 'delete failed' });
      return;
    }
    res.status(204).send();
  });
});

// List tasks
router.get('/', function(req, res) {
  var projectId = req.query.projectId;
  if (!projectId) {
    res.status(400).json({ error: 'projectId required' });
    return;
  }

  var filters = {
    status: req.query.status,
    priority: req.query.priority,
    assigneeId: req.query.assigneeId,
    search: req.query.search,
    page: req.query.page,
    limit: req.query.limit
  };

  taskService.listTasks(projectId, filters, function(err, tasks) {
    if (err) {
      res.status(500).json({ error: 'failed to list tasks' });
      return;
    }
    res.json(tasks);
  });
});

// Comments
router.post('/:taskId/comments', function(req, res) {
  taskService.createComment(req.params.taskId, req.body.authorId, req.body.content, function(err, comment) {
    if (err) {
      res.status(500).json({ error: 'failed to create comment' });
      return;
    }
    res.status(201).json(comment);
  });
});

router.get('/:taskId/comments', function(req, res) {
  taskService.getCommentsByTaskId(req.params.taskId, function(err, comments) {
    if (err) {
      res.status(500).json({ error: 'failed to get comments' });
      return;
    }
    res.json(comments);
  });
});

// Labels
router.post('/:taskId/labels/:labelId', function(req, res) {
  taskService.addLabelToTask(req.params.taskId, req.params.labelId, function(err) {
    if (err) {
      res.status(500).json({ error: 'failed to add label' });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;
