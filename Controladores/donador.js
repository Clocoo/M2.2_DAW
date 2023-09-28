const donadores = require("../Modelos/donadorModelo");

const getAll = async function (req,res){
    let p = donadores.findAll();
    await res.json(p);
}

const getByRFC = async function(req,res){
    await res.json(donadores.findByRFC(req.params.RFC));
}

const add = async function(req,res){
    const nuevoDonador = donadores.add(req.body);
    await res.json(nuevoDonador);
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;