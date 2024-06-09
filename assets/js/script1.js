// Definición de variables
let clickeo = 0;
let imagen = document.querySelector(".imagen");
let n = 0;

// Función paridad: Retorna 0 o 1 si la variable "clickeo" es respectivamente par o impar
function paridad(clickeo) {
    if (clickeo % 2 === 0) {
        return 0;

    } else {
        return 1;
    }
}

imagen.addEventListener("click", () => {
    clickeo++; //Se suma la unidad a variable "clickeo" por cada click
    n = paridad(clickeo); // Se llama al binarismo de la función, teniendose la variable n como 0 o 1

    if (n === 1) // Resultado de que la cantidad de clicks fue impar
        imagen.style.border = '2px solid red'; // Se tiene el borde solicitado

    else if (n === 0) // Resultado de que la cantidad de clicks fue impar
        imagen.style.border = ''; // Se quita el borde
});

// La gracia de este código es su versatilidad al tener distintos multiplos para ir agregando a gusto
// Así podría ir teniendo distintos styles por distintos multiplos de clickeo
// O como hice en el presente código, simplemente quitar borde aprovechando binarismo

