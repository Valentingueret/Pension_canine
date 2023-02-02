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

module.exports = {
  getModelAnimaux,
  getModelAnimauxById,
};
