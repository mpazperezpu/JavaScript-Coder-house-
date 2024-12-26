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
let productos = [];
/*
fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        obtenerProductos(productos);
    })
const contenedorProductos = document.getElementById('containerproductos')
const botonesMenu = document.querySelectorAll(".boton-menu");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".agregar-producto");
const numero = document.querySelector("#numero");
botonesMenu.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

function obtenerProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="agregar-producto" id="${producto.id}">Agregar Producto</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}
botonesMenu.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesMenu.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            obtenerProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            obtenerProductosProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".agregar-producto");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}
    */
   // Inicializar el contenedor de productos
const containerProducts = document.getElementById('containerproductos');


fetch('js/productos.json')
    .then(response => response.json()) 
    .then(productos => {
        
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button id='agregar-${producto.id}'>Agregar al Carrito</button>
            `;
            containerProducts.appendChild(productoDiv);

            const button = document.getElementById(`agregar-${producto.id}`);
            button.addEventListener('click', () => {
                agregarAlCarrito(producto);
            });
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    Toastify({
        text: `${producto.nombre} agregado al carrito!`,  
        duration: 3000, 
        gravity: "top", 
        position: "right", 
        backgroundColor: "orange", 
        stopOnFocus: true 
    }).showToast();  
}


const containerCarrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total');

function actualizarCarrito() {
    containerCarrito.innerHTML = ''; 
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        containerCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalCarrito.textContent = `Total: $${total}`;
}


function guardarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    } else {
        console.log("No hemos encontrado ningún producto en el carrito.");
    }
}

cargarCarrito(); 