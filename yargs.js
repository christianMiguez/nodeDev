const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente a la tarea'
};

const argv = require('yargs')
    .command('crear', 'Agrega una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}