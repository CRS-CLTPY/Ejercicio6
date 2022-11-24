const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: 30,
    hobbies: [ "programar", "squash", "piano"],
}

// console.log(pedro);
// pedro.altura = 1.80;
// console.log(pedro);
// delete pedro.activo;
// console.log(pedro);


for (const pedroKey in
    pedro) {
    console.log(typeof pedroKey);
}

pedro.saluda = function (){
    return `Hola, me llamo ${this.nombre}`;
}

//pedro.saluda2 = () => { return  `hola me llamo ${this.nombre}` } // undefined
//console.log(pedro.saluda2())