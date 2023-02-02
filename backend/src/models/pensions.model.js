const connection = require("../connection");

const getModelPensions = async () => {
  const [result] = await connection.query("SELECT * FROM pensions;");
  return result;
};

const getModelPensionsById = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM pensions where idPensions= ?",
    [id]
  );
  return result;
};

const postModelPensions = async (type, grandeur, nbAnimalPrst, imgPension) => {
  const result = await connection.query(
    "INSERT INTO pensions (type, grandeur, nbAnimalPrst, imgPension) VALUES (?,?,?,?)",
    [type, grandeur, nbAnimalPrst, imgPension]
  );
  return result;
};
module.exports = {
  getModelPensions,
  getModelPensionsById,
  postModelPensions,
};
