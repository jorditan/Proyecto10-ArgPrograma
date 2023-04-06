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

// const recorreArray = arr => {    RECORRIDO CON CICLO WHILE
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
//     for(let i=0; i<=arr.length-1; i++){   RECORRIDO CON CICLO FOR
//     console.log(arr[i]);
//         let ul = document.getElementById("recorridoArray")
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(arr[i]));
//         ul.appendChild(li);
//     }
// }
// recorreArray(dadoElArray);


const recorreArray = arr => arr.forEach(i => {  // RECORRIDO CON FOR EACH
    console.log(i);
    let ul = document.getElementById("recorridoArray")
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
});

recorreArray(dadoElArray);

const numerosIncrementados = dadoElArray.map(function(x) {
    return x + 1;
})
console.log(numerosIncrementados);

const sumaIncrementados = (accumulator, currentValue) => accumulator + currentValue;
console.log(numerosIncrementados.reduce(sumaIncrementados));

const promedio = numerosIncrementados / 7;
console.log(promedio);
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

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

const nombresLargos = nombres.filter(nombres => nombres.length > 6);
console.log(nombresLargos);



