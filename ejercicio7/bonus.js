//Escribe una función maxCaracter que reciba una cadena de texto y retorne el caracter que más se repite en la cadena.
// Ejemplos
//console.log(maxCaracter("abcccccd")) // "c"
// console.log("manzana 12311111") // "1"
function maxCaracter(str){
    for(let i = 0; i < str.length; i++){
        let contador = 0;
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                contador++;
            }
        }
        if(contador > 1){
            return str[i];
        }
    }
}

console.log(maxCaracter('12311111'))