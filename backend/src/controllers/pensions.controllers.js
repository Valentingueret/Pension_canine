const pensionsModel = require("../models/pensions.model");

const getPensions = async (req, res) => {
  const pensions = await pensionsModel.getModelPensions();
  res.status(200).send(pensions);
};

const getPensionsById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const pension = await pensionsModel.getModelPensionsById(id);
  res.status(200).send(pension);
};

module.exports = {
  getPensions,
  getPensionsById,
};
