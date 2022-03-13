const { v4: uuidv4 } = require('uuid');
const ToDoListModel = require('../Models/ToDoListModel');

const create = (p_body) => {
  const { status, prority, description, dueAt } = p_body;

  const newDoc = new ToDoListModel({
    id: uuidv4(),
    status: status,
    prority: prority,
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
  const { status, prority, description, dueAt } = p_body;

  let doc;
  try {
    doc = await ToDoListModel.findByIdAndUpdate(p_id, {
      status: status,
      prority: prority,
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
