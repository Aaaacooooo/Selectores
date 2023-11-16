// Variables globales para el tamaño del texto
let tamano = 1;
let tamanoOriginal = 1;
let contador = 0;

// Función para modificar el tamaño de un párrafo específico
function modificarTexto(elEvento, pixel, parrafo) {
    let elemento = document.getElementById(parrafo);
    switch (elEvento) {
        case 'aumentar':
            if (tamano > 2) {
                alert('Superado el tamaño máximo');
                break;
            } else {
                tamano = tamano + pixel;
                break;
            }
        case 'reducir':
            if (tamano < 0.9) {
                alert('Superado el tamaño mínimo');
                break;
            } else {
                tamano = tamano - pixel;
                break;
            }
        case 'original':
            tamano = tamanoOriginal;
            break;
    }
    elemento.style.fontSize = tamano + 'em';
}

// Función para crear un nuevo párrafo
function CrearParrafo() {
    let p = document.createElement('p');
    p.id = contador;
    p.textContent = `Texto a agrandar, reducir o dejar de forma original ${p.id}`;
    document.body.insertAdjacentElement("beforeend", p);
    if (contador <= 10) {
        contador++;
    }
}

// Función para aplicar estilos a los párrafos
function aplicarEstilos() {
    // Obtener valores de tamaño, color y fuente
    var tamanio = document.getElementById('tamanio').value;
    var color = document.getElementById('color').value;
    var fuente = document.getElementById('fuente').value;

    // Obtener el ID del párrafo o "todos" si se desea cambiar todos
    let parrafoId = document.getElementById('parrafo').value;
    let parrafos;

    // Seleccionar los párrafos específicos según el ID o todos si es "todos"
    if (parrafoId === 'todos') {
        parrafos = document.querySelectorAll("p");
    } else {
        parrafos = document.querySelectorAll(`p[id='${parrafoId}']`);
    }

    // Aplicar estilos a cada párrafo seleccionado
    parrafos.forEach(function (parrafo) {
        parrafo.style.fontSize = tamanio;
        parrafo.style.color = color;
        parrafo.style.fontFamily = fuente;
    });
}
