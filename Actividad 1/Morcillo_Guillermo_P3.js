var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
var mes = prompt("Dime un mes");
var mensaje = "El mes " + mes + " pertenece a la estacion: ";
var meses = mes.toLowerCase();

if(meses == "diciembre" || meses == "enero" || meses == "febrero"){
    alert(mensaje + estaciones[3]);
} else if (meses == "marzo" || meses == "abril" || meses == "mayo"){
    alert(mensaje + estaciones[0]);
} else if (meses == "junio" || meses == "julio" || meses == "agosto"){
    alert(mensaje + estaciones[1]);
} else if (meses == "septiembre" || meses == "octubre" || meses == "noviembre"){
    alert(mensaje + estaciones[2]);
} else{
    alert("Mes incorrecto")
}