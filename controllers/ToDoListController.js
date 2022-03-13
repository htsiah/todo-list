const { v4: uuidv4 } = require('uuid');

const ToDoListServices = require('../services/ToDoListServices');

const create = async (req, res, next) => {
  const data = await ToDoListServices.create(req.body);
  res.status(201).json(data);
};

const getAll = async (req, res, next) => {
  const data = await ToDoListServices.get();
  res.json(data.map((doc) => doc.toObject({ getters: true })));
};

const getById = async (req, res, next) => {
  const { id } = req.query;
  const data = await ToDoListServices.getById(id);
  res.status(200).json(data);
};

const updateById = async (req, res, next) => {
  const { id } = req.query;
  const data = await ToDoListServices.getByIdAndUpdate(id, req.body);
  res.status(200).json(data);
};

const deleteById = async (req, res, next) => {
  const { id } = req.query;
  await ToDoListServices.deleteById(id);
  res.status(200).json({ status: 'success' });
};

const getReviewStatistic = async (req, res, next) => {
  const data = await ToDoListServices.getReviewStatistic();
  res.status(200).json(data);
};

const getReviewChart = async (req, res, next) => {
  const data = await ToDoListServices.getReviewChart();
  res.status(200).json(data);
};

const getLatest = async (req, res, next) => {
  const data = await ToDoListServices.getLatest();
  res.status(200).json(data);
};

exports.create = create;
exports.getAll = getAll;
exports.updateById = updateById;
exports.deleteById = deleteById;
exports.getById = getById;
exports.getReviewStatistic = getReviewStatistic;
exports.getReviewChart = getReviewChart;
exports.getLatest = getLatest;
