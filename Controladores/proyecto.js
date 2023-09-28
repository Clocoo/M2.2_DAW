const proyectos = require("../Modelos/proyectoModelo");

const getAll = async function (req,res){
    let p = proyectos.findAll();
    await res.json(p);
}

const getByID = async function(req,res){
    await res.json(proyectos.findByID(req.params.ID));
}

const add = async function(req,res){
    const nuevoProyecto = proyectos.add(req.body);
    await res.json(nuevoProyecto);
}

exports.getAll = getAll;
exports.getByID = getByID;
exports.add = add;