var mes = prompt("Dime un mes");
var mensaje = "El mes de " + mes + " pertenece a la estacion: ";
var meses = mes.toLowerCase();

switch(meses){
    case "diciembre":
    case "enero":
    case "febrero":
        document.write(mensaje + "Invierno");
        break;

    case "marzo":
    case "abril":
    case "mayo":
        document.write(mensaje + "Primavera");
        break;

    case "junio":
    case "julio":
    case "agosto":
        document.write(mensaje + "Primavera");
        break;

    case "septiembre":
    case "octubre":
    case "noviembre":
        document.write(mensaje + "Otoño");
        break;
        
    default:
        document.write("Mes incorrecto");
        break;
}