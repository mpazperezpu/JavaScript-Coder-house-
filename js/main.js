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
        id: 1,nombre:"Catering Economico",precio: 6500,
    },
    {
        id: 2,nombre:"Catering Premium",precio: 8000,
    },
    {   id:3,nombre:"Pizza Party Economico",precio : 6900,
    },
    {   id:4,nombre:"Pizza Party Premium",precio : 7900,
    },
    {   id:5,nombre: "Docena de Empanadas Congeladas",precio: 9500,
    }
];
const containerProducts = document.getElementById('productos');
productos.forEach(producto =>{
    const productoDiv = document.createElement('div');
    productoDiv.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button id='agregar-${producto.id}'>Agregar al Carrito</button>`;
    containerProducts.appendChild(productoDiv);
    const button = document.getElementById(`agregar-${producto.id}`);
    button.addEventListener('click',()=>
    {
        agregarAlCarrito(producto);
    });
    
});
let carrito =[]
function agregarAlCarrito(producto){
    carrito.push(producto)
    console.log(carrito)
    
}
const containerCarrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total');
function actualizarCarrito(){
    containerCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        containerCarrito.appendChild(li);
    })
    const total = carrito.reduce ((acc,producto)=> acc + producto.precio ,0)
    totalCarrito.textContent = `Total:${total}`;
}
function agregarAlCarrito(producto){
    carrito.push(producto);
    actualizarCarrito();
}
function guardarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function agregarAlCarrito(producto){
    carrito.push(producto);
    actualizarCarrito();
    guardarLocalStorage();
}
function cargarCarrito(){
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado){
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}
cargarCarrito();