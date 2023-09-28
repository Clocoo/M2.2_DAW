const donadores = [
    {
        RFC:1,
        nombre: "Osmar",
        proyectos_asociados: [1,2],
        imagen_donador: "imagen del donador",
        cantidad_donada: 40000
    },
    {
        RFC:2,
        nombre: "Javier",
        proyectos_asociados: [1,2],
        imagen_donador: "imagen del donador",
        cantidad_donada: 3000
    }
]

const findAll = function(){
    return donadores;
}

const findByRFC = function(RFC){
    let p = donadores.find(e => e.RFC == RFC);
    return p;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
