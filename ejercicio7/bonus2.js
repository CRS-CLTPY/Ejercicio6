// Escribe una función llamada palindrome que recibe una cadena de texto. Determina si la cadena es palindrome considerando sólo caracteres alphanuméricos e ignorando si es mayúscula o minúscula.
//     Ejemplos
// console.log("Amor a Roma") // Output: true
// console.log("vamos makers!") // Output: false

function isPalindromo(str){
    let str2 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let str3 = str2.split('').reverse().join('');
    return str2 === str3;
}

console.log(isPalindromo('vamos makers!'));