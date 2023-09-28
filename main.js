var nombre = prompt("Por favor, ingrese su nombre:", "Usuario");
if (nombre === null) {
    console.log("El usuario canceló la entrada.");
} else {
    console.log("Hola, " + nombre + "!");
}
    var carrito = [];
    var precios = [0, 35, 65, 75, 95]; 
    var total = 0;

    function agregarAlCarrito(productoId) {
        var precio = precios[productoId];
        carrito.push({ id: productoId, precio: precio });
        total += precio;
        actualizarCarrito();
    }

    function vaciarCarrito() {
        carrito = [];
        total = 0;
        actualizarCarrito();
    }

    function actualizarCarrito() {
        var carritoElement = document.getElementById("carrito");
        var totalElement = document.getElementById("total");
        carritoElement.innerHTML = "";
        
        carrito.forEach(function(item) {
            var productoNombre = "Producto " + item.id;
            carritoElement.innerHTML += "<li>" + productoNombre + " - $" + item.precio + "</li>";
        });
        
        totalElement.textContent = total;
    }
