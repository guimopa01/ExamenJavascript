var precio = parseFloat(prompt("Introduce el precio"));
var iva = 0.21;

function calcularPrecio(){
 total = precio + (precio * iva);
 return total.toFixed(2);
}

calcularPrecio();
alert("El precio total es: " + total);