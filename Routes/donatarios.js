const express = require("express");
const router = express.Router();
const donatarioController = require("../Controladores/donatario");

router.get("/",donatarioController.getAll);
router.get("/:RFC",donatarioController.getByRFC);
router.post("/",donatarioController.add);

module.exports = router;