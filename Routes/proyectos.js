const express = require("express");
const router = express.Router();
const proyectosController = require("../Controladores/proyecto");

router.get("/",proyectosController.getAll);
router.get("/:ID",proyectosController.getByID);
router.post("/",proyectosController.add);

module.exports = router;