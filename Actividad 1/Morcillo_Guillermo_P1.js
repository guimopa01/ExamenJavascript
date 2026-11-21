var resultado = 0;
var numMayoresCien = 0;

for(let i = 1; i <= 5; i++){

   var num = parseInt(prompt("Introduce el numero " + i + ":"))

   resultado += num; 

    if (num > 100){
        numMayoresCien++;
   
}}

alert("Esta es la suma de todos los numeros: " + resultado);

alert("Hay " + numMayoresCien + " numeros mayores de 100");