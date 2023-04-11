// EJERCICIO 1

const numerosRandom = [];
for (let i = 1; i <= 10; i++) {
    numerosRandom.push(Math.ceil(Math.random()*100));
    numerosRandom.sort(function(a, b){return a - b});
}

function imprimirValores() {
    numerosRandom.forEach(function(numeros) {
        let ul = document.getElementById("listaDeDatos")
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(numeros));
        ul.appendChild(li);
    })
}
imprimirValores();
console.log(numerosRandom); //ESTO ME ROMPIO LA CABEZA!!!

// EJERCICIO 2

const dadoElArray = [1,2,3,4,5,6];

// const recorreArray = arr => {    A) RECORRIDO CON CICLO WHILE
//     let i = 0;
//     while(i<=arr.length-1){
//     console.log(arr[i])
//     i++;
//     let ul = document.getElementById("recorridoArray")
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(i));
//     ul.appendChild(li);
//     }
// }
// recorreArray(dadoElArray);

// const recorreArray = (arr) => {
//     for(let i=0; i<=arr.length-1; i++){   B) RECORRIDO CON CICLO FOR
//     console.log(arr[i]);
//         let ul = document.getElementById("recorridoArray")
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(arr[i]));
//         ul.appendChild(li);
//     }
// }
// recorreArray(dadoElArray);


const recorreArray = arr => arr.forEach(i => {  // C) RECORRIDO CON FOR EACH
    console.log(i);
    let ul = document.getElementById("recorridoArray")
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
});

recorreArray(dadoElArray);

//   D)



//   E)
const numerosIncrementados = dadoElArray.map(function(x) {
    return x + 1;
})
console.log(numerosIncrementados);

//   F)

function promedio(arr) {
    let suma = 0
    for(i=0; i < arr.length; i++){
        suma = suma + arr[i];
    }
    return suma/dadoElArray.length
}

console.log(promedio(numerosIncrementados));


//EJERICIO 3

const numeros = [2, 5, 15, 7, 8];

const numerosAlCudrado = numeros.map(function(x){
    return Math.pow(x, 2);
})

console.log(numerosAlCudrado);

//EJERCICIO 4

const positivoNegativo = [ 1, -4, 12, 0, -3, 29, -150];

const positivos = positivoNegativo.filter(positivoNegativo => positivoNegativo > 0);

const suma = (accumulator, currentValue) => accumulator + currentValue;

console.log(positivos.reduce(suma));

// EJERCICIO 5

// A)

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

const nombresLargos = nombres.filter(nombres => nombres.length > 6);
console.log(nombresLargos);

// B) 

const recorrerInciiales = (arr) => {
    for(let i=0; i<=arr.length-1; i++){  
    }
    console.log(arr.filter(i => i[0]==="M"));
}

recorrerInciiales(nombres);

// C)

const ordenAlfabetico = nombres.sort();
console.log(ordenAlfabetico);

// D)
const mostrarIniciales = (arr) => arr.map((i) => i.charAt(0));
const inciales = mostrarIniciales(nombres);
console.log(inciales);

// F)
const convertirMayuscula = (arr) => arr.map((i) => i.toUpperCase());
const mayusculas = convertirMayuscula(nombres);
console.log(mayusculas);

// G)
const incialJ = numeros.some(i => i[0] === "J");
console.log(incialJ);

//EJERCICIO 6

// const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
// const colorUsuario = prompt('Ingrese un color');
//     if (colores.includes(colorUsuario)) {
//         alert('El color forma parte del array');
//     }
//     else {
//         alert('El color no forma parte del array');
//     }

// Lo comento para que no me moleste cuando entro a la pagina jeje/

//EJERCICIO 7
const numeros2 = [2, 10, 8, 5, 13];
const encontrarNumerosPares = (arr) => arr.filter(i => i % 2 === 0);
console.log(encontrarNumerosPares(numeros2));

//EJERCICIO 8
const palabras = ['Benedetto', 'Santiago', 'Davo', 'Arbol', 'Espacio']
const incialVocal = palabras.filter(i => {
    const primeraLetra = i.charAt(0).toLowerCase();
    return primeraLetra === "a" || primeraLetra === "e" || primeraLetra === "i" || primeraLetra === "o" || primeraLetra === "u";
})

console.log(incialVocal);

//EJERCICIO 9
const ejercicio9 = ['Deep Purple', 'Black Sabbath', 'AC/DC','Arctic Monkeys', 'Green Day'];
ejercicio9.splice(1, 1, 'Arctic Monkeys');
ejercicio9.splice(3, 1, 'Black Sabbath');
console.log(ejercicio9);

//EJERCICIO 10







