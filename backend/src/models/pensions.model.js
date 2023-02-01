const connection = require("../connection");

const getModelPensions = async () => {
  const [result] = await connection.query("SELECT * FROM pensions;");
  return result;
};

const getModelPensionsById = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM pensions where id= ?",
    [id]
  );
  return result;
};
module.exports = {
  getModelPensions,
  getModelPensionsById,
};
