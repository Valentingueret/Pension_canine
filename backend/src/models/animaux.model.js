const connection = require("../connection");

const getModelAnimaux = async () => {
  const [result] = await connection.query("SELECT * FROM animaux;");
  return result;
};

const getModelAnimauxById = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM animaux where idAnimaux= ?",
    [id]
  );
  return result;
};

const postModelAnimaux = async (type, nom, age, imgAnimaux, pensionsId) => {
  const result = await connection.query(
    "INSERT INTO animaux (type, nom, age, imgAnimaux, pensionsId) VALUES (?,?,?,?,?)",
    [type, nom, age, imgAnimaux, pensionsId]
  );
  return result;
};

const deleteModelAnimauxById = async (id) => {
  const [result] = await connection.query(
    "DELETE FROM animaux WHERE idAnimaux = ?",
    [id]
  );
  return result;
};

module.exports = {
  getModelAnimaux,
  getModelAnimauxById,
  postModelAnimaux,
  deleteModelAnimauxById,
};
