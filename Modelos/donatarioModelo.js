const donatarios = [
    {
        RFC:1,
        nombre: "Armando Casas",
        proyecto_asociado: 1,
        imagen_donatario: "imagen del donatario",
    },
    {
        RFC:2,
        nombre: "Cindy Nero",
        proyecto_asociado: 2,
        imagen_donatario: "imagen del donatario",
    }
]

const findAll = function(){
    return donatarios;
}

const findByRFC = function(RFC){
    let p = donatarios.find(e => e.RFC == RFC);
    return p;
}

const add = function(nuevoDonatario){
    const donatarioNuevo = { ...nuevoDonatario};
    donatarios.push(donatarioNuevo);
    return donatarioNuevo;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;