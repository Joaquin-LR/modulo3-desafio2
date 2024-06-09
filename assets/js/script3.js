// En este caso, son id's por la unicidad del uso de las mismas en el contexto seguridad

// Se definen variables auxiliares (0 incorrecto o no ingresado / 1 correcto)
let n = 0;
let m = 0;

// Función para abrir candados (iconos)
function desbloquearIcono(icono) {
    icono.classList.remove('fa-lock');
    icono.classList.add('fa-lock-open');
}

// Se define función contrasena
function contrasena() {
    let valor1 = document.getElementById('select1').value;
    let valor2 = document.getElementById('select2').value;
    let valor3 = document.getElementById('select3').value;
    let password = valor1 + valor2 + valor3; // A diferencia de la página 2, se concatena

    // Llamo al párrafo variable "resultado" y la imagen futuramente resultante a partir de este
    let resultado = document.getElementById('resultado');
    let imagen = document.getElementById('imagen');

    if (password === '911') { // Primer password correcto
        resultado.innerHTML = "password 1 correcto";
        n = 1;
        resultado.style.color = "#99ff00";
        imagen.alt = "Correcto";
        desbloquearIcono(icono1);

    } else if (password === '714') { //Segundo password correcto
        resultado.innerHTML = "password 2 correcto";
        m = 1;
        resultado.style.color = "#99ff00";
        desbloquearIcono(icono2);

    } else { // Password incorrecto
        resultado.innerHTML = "password incorrecto";
        resultado.style.color = "rgb(255, 0, 43)";
        imagen.alt = "Incorrecto";
    }

    // Solo si password 1 y 2 son correctos, se abre la puerta
    if (n == 1 && m == 1) {
        imagen.src = "./assets/img/puertaabierta.png";
    }
}

// Se ejecuta la función "contrasena" al presionar el botón de verificación
document.getElementById('verificar').addEventListener('click', contrasena);
