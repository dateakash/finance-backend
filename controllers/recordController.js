const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    user: req.user.id,
  });
  res.json(record);
};

exports.getRecords = async (req, res) => {
  const records = await Record.find({ user: req.user.id });
  res.json(records);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};