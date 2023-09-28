const express = require("express");
const router = express.Router();
const donadorController = require("../Controladores/donador");

router.get("/",donadorController.getAll);
router.get("/:RFC",donadorController.getByRFC);
router.post("/",donadorController.add);

module.exports = router;