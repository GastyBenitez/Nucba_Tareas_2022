/*

*Crear un HTML con un H1 y un p.
*Tanto el H1 como el p deben tener texto en su interior.
*Crear un CSS con estilos que le den color.

Con lo visto en clase, lograr que, luego de 3 segundos de cargada la pagina, el h1 cambie de color y cambiar el texto dentro del p.

*/ 


const titulo = document.querySelector("body > main > h1");

const parrafo = document.querySelector("body > main > p");




window.setTimeout(()=>{
    titulo.style ="color:green;"
    parrafo.textContent = "Cambio de texto";
}, 3000);