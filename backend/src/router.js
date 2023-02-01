const express = require("express");

const router = express.Router();
const pensionsControllers = require("./controllers/pensions.controllers");
const animauxControllers = require("./controllers/animaux.controllers");

router.get("/pensions", pensionsControllers.getPensions);
router.get("/pensions/:id", pensionsControllers.getPensionsById);
router.get("/animaux", animauxControllers.getAnimaux);
router.get("/animaux/:id", animauxControllers.getAnimauxById);

module.exports = router;
