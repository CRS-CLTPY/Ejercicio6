let receta = {};

receta.nombre = 'sandiwch';

receta.ingredientes = [];

receta.ingredientes.push({
    nombre: 'pan',
    cantidad: 2
});

receta.ingredientes.push({
    nombre: 'queso',
    cantidad: 1
});

console.log(receta.ingredientes[0]?.nombre);
console.log('Cantidad de ingredientes:', receta.ingredientes.length);