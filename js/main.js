let precioEconomico=6500;
let precioPremium =8000;
let total ;
let tipo;
let cantidad;
while(true){
    tipo = prompt("Ingrese el tipo de catering que desea: \n Economico \n Premium").toLowerCase();
    if (tipo ==="economico" || tipo === "premium"){
        console.log(tipo)
    break;
    } else {
    alert(' Por favor ingrese una opcion valida');
}
}
while(true){
    cantidad = parseInt(prompt('Para cuantas personas desea el catering?'));
    if(!isNaN(cantidad)){
        break;
    }else{
        alert("Por favor ingrese un numero");
    }
}
if (tipo === "economico"){
 total=cantidad*precioEconomico
}
if(tipo === "premium"){
    total =cantidad*precioPremium
}


alert(`El precio de un catering ${tipo} para ${cantidad} personas tendria un costo de ${total}`)