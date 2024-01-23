let parrafo = document.getElementById("parrafo"); // llamar al p
const boton = document.getElementById("boton");// llamar al boton

boton.addEventListener("click", () => {

    let cantidadUno = Number(document.getElementById("primerSticker").value); //se coloca el .value para obtener el valor del input... 
    let cantidadDos = Number(document.getElementById("segundoSticker").value); //number para cambiar el string
    let cantidadTres = Number(document.getElementById("tercerSticker").value); // Dejar dentro de "click" para escalar,para preguntar en cada click el valor dentro del input

    let total = cantidadUno + cantidadDos + cantidadTres; //
    
    if(total <= 10){
        parrafo.innerHTML = "Llevas " + total + " stickers"; // inyectar al parrafo la sumatoria de los input
    } else {
        parrafo.innerHTML = "Llevas demasiados stickers"; // inyectar este parrafo si no cumple la condición
    }
})

