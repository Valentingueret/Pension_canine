const express = require("express");

const router = express.Router();
const pensionsControllers = require("./controllers/pensions.controllers");
const animauxControllers = require("./controllers/animaux.controllers");

// route pensions ////////////////////////////////

router.get("/pensions", pensionsControllers.getPensions);
router.get("/pensions/:id", pensionsControllers.getPensionsById);
router.post("/pensions", pensionsControllers.postPensions);

// route animaux ////////////////////////////////

router.get("/animaux", animauxControllers.getAnimaux);
router.get("/animaux/:id", animauxControllers.getAnimauxById);
router.post("/animaux", animauxControllers.postAnimaux);

module.exports = router;
