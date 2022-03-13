require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const toDoListRoutes = require('./routes/ToDoListRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use(express.static(path.join('public')));

app.use('/api/todolist', toDoListRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost:27017/todo-list`, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db (todo-list) connection established.');
    app.listen(process.env.PORT || 80);
    console.log('Listening port 80.');
  })
  .catch((err) => {
    console.log(err);
  });
