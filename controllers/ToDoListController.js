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

const updateById = async (req, res, next) => {
  const { id } = req.query;
  const data = await ToDoListServices.getByIdAndUpdate(id, req.body);
  res.status(200).json({ status: 'success' });
};

const deleteById = async (req, res, next) => {
  const { id } = req.query;
  await ToDoListServices.deleteById(id);
  res.status(200).json({ status: 'success' });
};

exports.create = create;
exports.getAll = getAll;
exports.updateById = updateById;
exports.deleteById = deleteById;
