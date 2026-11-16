const PRECIO_GASEOSAS = 24.00;
const PRECIO_AGUA = 15.00;
const PRECIO_BEBIDAS = 28.00;
const DESCUENTO_MAYOR = 0.15;

let indiceCarrusel = 0;

function iniciarCarrusel() {
    const diapositivas = document.getElementsByClassName("diapositiva");
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    indiceCarrusel++;
    if (indiceCarrusel > diapositivas.length) {
        indiceCarrusel = 1;
    }
    if (diapositivas.length > 0) {
        diapositivas[indiceCarrusel - 1].style.display = "block";
    }
}

iniciarCarrusel();
setInterval(iniciarCarrusel, 3000);

const btnOfertas = document.getElementById("boton-cambiar");
const textoMensaje = document.getElementById("mensaje");

btnOfertas.addEventListener("click", function() {
    textoMensaje.textContent = "¡OFERTA DEL DÍA! Lleva más de 10 paquetes y obtén 15% de descuento.";
    textoMensaje.style.color = "#D62828";
    textoMensaje.style.fontWeight = "bold";
});

function calcularCotizacion(categoria) {
    let precioUnitario = 0;
    switch (categoria) {
        case "Gaseosas":
            precioUnitario = PRECIO_GASEOSAS;
            break;
        case "Agua mineral":
            precioUnitario = PRECIO_AGUA;
            break;
        case "bebidas":
            precioUnitario = PRECIO_BEBIDAS;
            break;
        default:
            precioUnitario = 20.00;
    }

    let entrada = prompt(`Has seleccionado: ${categoria} (S/ ${precioUnitario} por paquete).\n¿Cuántos paquetes deseas cotizar?`);
    let cantidad = parseInt(entrada);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida mayor a 0.");
        return;
    }

    let subtotal = precioUnitario * cantidad;
    let descuento = 0;

    if (cantidad >= 10) {
        descuento = subtotal * DESCUENTO_MAYOR;
    }

    let totalFinal = subtotal - descuento;

    alert(
        `RESUMEN DE COTIZACIÓN:\n` +
        `Producto: ${categoria}\n` +
        `Cantidad: ${cantidad} paquetes\n` +
        `Subtotal: S/ ${subtotal.toFixed(2)}\n` +
        `Descuento (15% por +10 paq.): S/ ${descuento.toFixed(2)}\n` +
        `TOTAL A PAGAR: S/ ${totalFinal.toFixed(2)}`
    );
}

const botonesProductos = document.querySelectorAll(".producto button");
for (let i = 0; i < botonesProductos.length; i++) {
    botonesProductos[i].addEventListener("click", function() {
        const nombreProducto = this.parentElement.querySelector("h3").textContent;
        calcularCotizacion(nombreProducto);
    });
}

const formulario = document.getElementById("formulario-contacto");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const productoInteres = document.getElementById("producto").value;

    if (celular.length !== 9 || isNaN(celular)) {
        alert("Error: El número de celular debe tener exactamente 9 dígitos numéricos.");
    } else {
        alert(`¡Gracias ${nombre}! Hemos recibido tu consulta sobre "${productoInteres}". Te escribiremos al ${celular} pronto.`);
        formulario.reset();
    }
});
