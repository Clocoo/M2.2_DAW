const cors = require("cors");
const express = require("express");
const proyectosRouter = require("./Routes/proyectos");
const donadoresRouter = require("./Routes/donadores");
const donatariosRouter = require("./Routes/donatarios");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/proyectos",proyectosRouter);
app.use("/donadores",donadoresRouter);
app.use("/donatarios",donatariosRouter);

app.listen(4000,()=> {
    console.log("Server en el puerto 4000");
});