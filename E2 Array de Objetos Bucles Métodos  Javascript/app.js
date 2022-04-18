/*

Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸*

*/











/////////////////////////////////////////////////////////////////////////////////////////////////////






    const pizzas = [
        {id: 0, nombre: "Pizza de rucula", ingredientes: ["Salsa, jamon, queso, rucula, aceitunas"], precio: 800},
        {id: 1, nombre: "Pizza fugazzetta", ingredientes: ["Cebolla, queso, oregano, aceitunas"], precio: 750},
        {id: 2, nombre: "Pizza napolitana", ingredientes: ["Salsa, queso, tomate, ajo, aceitunas"], precio: 850},
        {id: 3, nombre: "Pizza de muzzarella", ingredientes: ["Salsa, muzzarella, oregano, aceitunas"], precio: 550},
        {id: 4, nombre: "Piza de jamon", ingredientes: ["Salsa, muzzarella, jamon, aceitunas"], precio: 700},
        {id: 5, nombre: "Pizza fugazza", ingredientes: ["Cebolla, codimentos"], precio: 650}
        

    ];

    console.log(`La ${pizzas.filter(pizza => pizza.id % 2 !== 0).map(pizza => pizza.nombre)} tienen un id impar`);

    console.log(`La ${pizzas.filter(pizzas => pizzas.precio < 600).map(pizza => pizza.nombre)} vale menos de 600`);


    for (let i=0; i<pizzas.length;i++){
        console.log("Nuestras pizzas son " + pizzas[i].nombre);
    }
    

    for (let i=0; i<pizzas.length;i++){
        console.log("Nuestros precios son " + pizzas[i].precio);
    }
    
    for (let i=0; i<pizzas.length;i++){
        console.log("La " + pizzas[i].nombre + "Cuesta" + " "  + pizzas[i].precio);
    }
    
    

    // console.log(pizzas);
    // for(let i=0; i<pizzas.length;i++){
    //     console.log(pizzas[i].id, "La " + pizzas[i].nombre, "contiene " + pizzas[i].ingredientes, "y cuesta " + pizzas[i].precio);
    // }