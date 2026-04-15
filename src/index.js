var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var taskRoutes = require('./routes/tasks');
var authRoutes = require('./routes/auth');

var app = express();
var PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', function(req, res) {
  res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).json({ error: 'something went wrong' });
});

app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
