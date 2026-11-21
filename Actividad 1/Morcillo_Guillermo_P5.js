var precio = parseFloat(prompt("Introduce el precio del articulo:"));
var iva = 0.21;

var precioIva = precio * iva;
var precioTotal = precio + precioIva;

alert("El precio total del producto es de: " + precioTotal.toFixed(2) + 
    "\ny el precio del iva es de: " + precioIva);