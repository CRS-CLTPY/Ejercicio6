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
console.log('receta', receta)

function totalIngredientes(arguments){
    let contador = 0;
    const {ingredientes} = receta;
    for(let i = 0; i < ingredientes.length; i++){
        contador = contador + ingredientes[i].cantidad;
    }
    return contador
}
console.log('Cantidad de ingredientes:', totalIngredientes(receta));