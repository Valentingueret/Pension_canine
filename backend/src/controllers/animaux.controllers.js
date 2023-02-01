const animauxModel = require("../models/animaux.model");

const getAnimaux = async (req, res) => {
  const animaux = await animauxModel.getModelAnimaux();
  res.status(200).send(animaux);
};

const getAnimauxById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const animaux = await animauxModel.getModelAnimauxById(id);
  res.status(200).send(animaux);
};

module.exports = {
  getAnimaux,
  getAnimauxById,
};
