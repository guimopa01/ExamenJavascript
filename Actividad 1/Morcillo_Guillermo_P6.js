var frase = prompt("Introduce una frase:");

document.write(frase.length + "<br>")

document.write(frase.toUpperCase() + "<br>");

document.write(frase.toLowerCase() + "<br>");

var fraseSeparada = frase.split(" ");
var mensaje = "";

for(f of fraseSeparada){
    mensaje += f + "<br>";
}

document.write(mensaje + "<br>");

var mensajeRev = "";
fraseSeparada.reverse();

for(f of fraseSeparada){
 mensajeRev += f + "<br>";
}

document.write(mensajeRev);