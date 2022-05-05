/*

¿Se acuerdan del ejercicio de hace dos clases en el cual capturaron los elementos del DOM? Bueno, hoy hay que hacer la misma pagina, pero hay que renderizarla y agregarle algunos estilos a elección desde JS.


*/


//ESTILOS AL H1
const h1Hola = document.querySelector("#h1Hola");
    // console.dir(h1Hola);

h1Hola.addEventListener("mouseover", (e)=>{
    e.target.style.cursor = "pointer";
    e.target.style.color = "red";
});

h1Hola.addEventListener("mouseleave", (e)=>{
    e.target.style.color = "";
});



//ESTILOS AL PARRAFO
const parrafo = document.querySelector("#parrafo");
    // console.dir(parrafo);

parrafo.addEventListener("mouseover", (e)=>{
    e.target.style = "font-size: 30px;"
    e.target.style = "font-weight: bold;"
    e.target.style.color = "green";

});

parrafo.addEventListener("mouseleave", (e)=>{
    e.target.style = ""
    e.target.style = ""
    e.target.style.color = "";
});




//ESTILOS AL DIV VACIO
const divVacio = document.querySelector("#divVacio");
    // console.dir(divVacio);

    window.setTimeout(()=>{
        divVacio.textContent = "Hola";
        divVacio.style = "width: 200px";
        divVacio.style = "background-color: black;"
    }, 3000);



//ESTILOS AL INPUT DE TEXTO
const text = document.querySelector("#text");
    console.dir(text);

text.addEventListener("focus", (e)=>{
    e.target.placeholder = "Usuario"
});






const pasword = document.querySelector("#pasword");
    console.dir(pasword);

const email = document.querySelector("#email");
    console.dir(email);

const number = document.querySelector("#number");
    console.dir(number);


const input = document.querySelector("#checkbox");
    console.dir(input);