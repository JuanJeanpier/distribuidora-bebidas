let formulario = document.querySelector("#formulario-contacto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los datos del cliente
    let nombre = document.querySelector("#nombre").value;
    let celular = document.querySelector("#celular").value;
    let producto = document.querySelector("#producto").value;

    // Preparar el mensaje
    let mensaje = "Hola, deseo solicitar información.\n\n" +
                  "Nombre: " + nombre + "\n" +
                  "Celular: " + celular + "\n" +
                  "Producto: " + producto;

    // Preparar el enlace de WhatsApp
    let url = "https://wa.me/51924779910?text=" + encodeURIComponent(mensaje);

    // Abrir WhatsApp
    window.open(url, "_blank");

});

// BUSCAR TODAS LAS DIAPOSITIVAS
let diapositivas = document.querySelectorAll(".diapositiva");

// MOSTRAR LA PRIMERA IMAGEN
diapositivas[0].style.display = "block";

// CONTROLAR EL CAMBIO DE IMAGENES
let indice = 0;

function cambiarImagen() {

    // OCULTAR TODAS LAS IMAGENES
    diapositivas.forEach(function(imagen) {
        imagen.style.display = "none";
    });

    // AVANZAR A LA SIGUIENTE IMAGEN
    indice++;

    // VOLVER A LA PRIMERA SI LLEGAMOS AL FINAL
    if (indice >= diapositivas.length) {
        indice = 0;
    }

    // MOSTRAR LA IMAGEN ACTUAL
    diapositivas[indice].style.display = "block";
}

setInterval(cambiarImagen, 3000);