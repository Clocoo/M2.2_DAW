const proyectos = [
    {
        ID:1,
        nombre: "PC GAMER 3000",
        descripcion: "computadora gamer",
        imagen: "imagen del proyecto",
        donatario: 1,
        donadores: [1,2],
        cantidad_donada: 1000
    },
    {
        ID:2,
        nombre: "SMART WATCH 3000",
        descripcion: "reloj inteligente",
        imagen: "imagen del proyecto",
        donatario: 1,
        donadores: [1,2],
        cantidad_donada: 2500
    },
]

const findAll = function(){
    return proyectos;
}

const findByID = function(ID){
    let p = proyectos.find(e => e.ID == ID);
    return p;
}

const add = function(nuevoProyecto){
    const proyectoNuevo = { ...nuevoProyecto};
    proyectos.push(proyectoNuevo);
    return proyectoNuevo;
}

exports.findAll = findAll;
exports.findByID = findByID;
exports.add = add;
