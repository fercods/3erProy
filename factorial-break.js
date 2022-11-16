/* - factorial-break.js -> Este archivo debe 
calcular el factorial de 10 utilizando un bucle while
, una bifurcación if y una sentencia break */

let factorial = 10;
let i = factorial-1;

while(true){
    factorial = factorial * i;
    i--;
    if(i === 1){
        break;
    }
}
console.log(factorial)