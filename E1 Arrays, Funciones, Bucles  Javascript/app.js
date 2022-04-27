/*
Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base)
Crear una función que acepte ese array como parámetro. 

Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)."

*/



var ingredientes = ["Harina", "Levadura", "Sal", "Aceite", "Tomate", "Cebolla", "Muzzarella", "Oregano", "Jamon", "agua"]
// console.log(ingredientes.length);

function resultado (ingredientes){
    let ingredientesPar = ingredientes.filter (i=> i.length  % 2 ==0);
    let ingredientesImpar = ingredientes.filter (i=> (i.length % 2 != 0));
   return console.log("Los ingredientes pares son " +  ingredientesPar + " "  + "Y los ingredientes impares son  " + ingredientesImpar);
}
resultado(ingredientes);

