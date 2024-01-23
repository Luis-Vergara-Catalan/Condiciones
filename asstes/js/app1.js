let imagenRecuadro = true; 
const arbol = document.querySelector("#bonsai");

arbol.addEventListener("click", () => {
    if (imagenRecuadro){
        arbol.className = "sinBorde"; //className es para buscar en el css la clase a modificar
        imagenRecuadro = false; // pasa a ser falso para que cuando se vaya a ocupar este pase al else
    }
    else{
        arbol.className ="borde"; //className es para buscar en el css la clase a modificar
        imagenRecuadro = true; // pasa a ser verdadero para cuando se vaya a ocupar pase al if
    }
})