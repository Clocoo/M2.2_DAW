const donatarios = require("../Modelos/donatarioModelo");

const getAll = async function (req,res){
    let p = donatarios.findAll();
    await res.json(p);
}

const getByRFC = async function(req,res){
    await res.json(donatarios.findByRFC(req.params.RFC));
}

const add = async function(req,res){
    const nuevoDonatario = donatarios.add(req.body);
    await res.json(nuevoDonatario);
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;