/*
-Crear un archivo HTML que contenga un input mail y un input password. 
-Validar que el primero sea un mail válido. 
-Validar que el segundo tenga un mínimo de 5 y un máximo de 12 caracteres. 

*/ 

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
    password: /^.{5,12}$/, // 5 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};


const validarFormulario = (e) => {
    switch(e.target.name) {
        case "mail":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById("grupo_mail").classList.remove("formulario_incorrecto");
            document.getElementById("grupo_mail").classList.add("formulario_correcto");
            console.log("correcto");
        }else{
            document.getElementById("grupo_mail").classList.remove("formulario_correcto");
            document.getElementById("grupo_mail").classList.add("formulario_incorrecto");
            console.log("error");

        }
        
        
        break;
        
        case "password":
        if(expresiones.password.test(e.target.value)){
            document.getElementById("grupo_pasword").classList.remove("formulario_incorrecto");
            document.getElementById("grupo_pasword").classList.add("formulario_correcto");
            console.log("correcto");
        }else{
            document.getElementById("grupo_pasword").classList.remove("formulario_correcto");
            document.getElementById("grupo_pasword").classList.add("formulario_incorrecto");
            console.log("error");
        }

        break;
    }
}











inputs.forEach((input) =>{
    input.addEventListener("blur", validarFormulario);
    // input.addEventListener("focus", validarFormulario);
    input.addEventListener("keyup", validarFormulario);
  });