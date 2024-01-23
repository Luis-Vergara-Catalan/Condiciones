const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    const claveUno = document.querySelector("#passUno").value;
    const claveDos = document.querySelector("#passDos").value;
    const claveTres = document.querySelector("#passTres").value;

    const password = claveUno + claveDos + claveTres;

    if (password == "911") parrafo.innerHTML = "password 1 correcto";
    else if (password =="714") parrafo.innerHTML = "password 2 correcto";
    else parrafo.innerHTML = "password incorrecto";
})