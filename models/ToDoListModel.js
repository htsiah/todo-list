const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoListSchema = new Schema({
  status: { type: String },
  priority: { type: String },
  description: { type: String },
  dueAt: { type: Date },
});

module.exports = mongoose.model('todolist', toDoListSchema);
