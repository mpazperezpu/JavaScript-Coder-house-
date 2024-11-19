/*
let precioEconomico=6500;
let precioPremium =8000;
let tipo;
let cantidad;


function tipoCatering(){
while(true){
    tipo = prompt("Ingrese el tipo de catering que desea: \n Economico \n Premium").toLowerCase();
    if (tipo ==="economico" || tipo === "premium"){
    return tipo;
    } else {
    alert(' Por favor ingrese una opcion valida');
}
}}
function cantidadPersonas (){
while(true){
    cantidad = parseInt(prompt('Para cuantas personas desea el catering?'));
    if(!isNaN(cantidad)){
        return cantidad;
    }else{
        alert("Por favor ingrese un numero");
    }
}}
function calcularTotal(tipo,cantidad){
if (tipo === "economico"){
    return cantidad*precioEconomico;
}
if(tipo === "premium"){
    return cantidad*precioPremium;
}}

tipo = tipoCatering()
cantidad = cantidadPersonas()
 let total = calcularTotal( tipo,cantidad)
alert(`El precio de un catering ${tipo} para ${cantidad} personas tendria un costo de ${total}`)*/

const productos=[
    {   
        id: 1,
        nombre:"Catering Economico",
        precio: 6500,
    },
    {
        id: 2,
        nombre:"Catering Premium",
        precio: 8000,
    },
    {
        id:3,
        nombre:"Pizza Party",
        precio : 7900,
    },
    {
        id:4,
        nombre: "Docena de Empanadas Congeladas",
        precio: 9500,
    }

]
let buscarProductos = prompt('Ingrese el producto que esta buscando').toLowerCase();
let resultado = productos.filter((producto) => producto.nombre.toLowerCase().includes(buscarProductos));
if (resultado.length >0){
    let productosEncontrados= "Hemos encontrado los siguientes productos:\n"+
        resultado.map((producto) =>  `${producto.nombre} $${producto.precio}`).join('\n')
        alert(productosEncontrados)
    }
else{
    alert("No hemos encontrado ningu producto")
}