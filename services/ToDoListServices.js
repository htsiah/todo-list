const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const ToDoListModel = require('../models/ToDoListModel');

const create = (p_body) => {
  const { status, priority, description, dueAt } = p_body;

  const newDoc = new ToDoListModel({
    id: uuidv4(),
    status: status,
    priority: priority,
    description: description,
    dueAt: dueAt,
  });

  try {
    newDoc.save();
  } catch (err) {
    const error = new Error(' Creating document failed.');
    return next(error);
  }

  return newDoc;
};

const get = async () => {
  let documents;
  try {
    documents = await ToDoListModel.find({});
  } catch {
    const error = new Error('Failed to get documents.');
    return next(error);
  }
  return documents;
};

const getById = async (p_id) => {
  let doc;
  try {
    doc = await ToDoListModel.findOne({ _id: p_id });
  } catch {
    const error = new Error('Find document failed.');
    return next(error);
  }

  return doc;
};

const getReviewStatistic = async (p_id) => {
  let totalTask;
  let totalCompleteTask;

  try {
    totalTask = await ToDoListModel.find({}).countDocuments();
    totalCompleteTask = await ToDoListModel.find({ status: 'Completed' }).countDocuments();
  } catch {
    const error = new Error('Find document failed.');
    return next(error);
  }

  return {
    totalCompleted: totalCompleteTask,
    totalTask: totalTask,
  };
};

const getReviewChart = async (p_id) => {
  let totalInCompleteTask;
  let totalCompleteTask;

  try {
    totalInCompleteTask = await ToDoListModel.find({ status: 'Incomplete' }).countDocuments();
    totalCompleteTask = await ToDoListModel.find({ status: 'Completed' }).countDocuments();
  } catch {
    const error = new Error('Find document failed.');
    return next(error);
  }

  return [
    {
      color: '#ff3e43',
      data: totalCompleteTask,
      label: 'Completed Task',
    },
    {
      color: '#937fc7',
      data: totalInCompleteTask,
      label: 'Incomplete Task',
    },
  ];
};

const getLatest = async (p_id) => {
  let documents;
  try {
    documents = await ToDoListModel.find({ dueAt: { $gte: moment().startOf('day').toDate() } })
      .limit(5)
      .sort({ dueAt: 1 });
  } catch {
    const error = new Error('Failed to get documents.');
    return next(error);
  }
  return documents;
};

const deleteById = async (p_id) => {
  try {
    await ToDoListModel.findByIdAndDelete(p_id);
  } catch {
    const error = new Error('Deleting document failed.');
    return next(error);
  }

  return true;
};

const getByIdAndUpdate = async (p_id, p_body) => {
  const { status, priority, description, dueAt } = p_body;

  let doc;
  try {
    doc = await ToDoListModel.findByIdAndUpdate(p_id, {
      status: status,
      priority: priority,
      description: description,
      dueAt: dueAt,
    });
  } catch {
    const error = new Error('Updating document failed.');
    return next(error);
  }

  return doc;
};

exports.create = create;
exports.get = get;
exports.deleteById = deleteById;
exports.getByIdAndUpdate = getByIdAndUpdate;
exports.getById = getById;
exports.getReviewStatistic = getReviewStatistic;
exports.getReviewChart = getReviewChart;
exports.getLatest = getLatest;
