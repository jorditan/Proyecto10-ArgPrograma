// // EJERCICIO 10



let cambiandocol = $(document);
cambiandocol.ready(iniciandocolores);

function iniciandocolores() {
  let color10 = $("#punto10");
  color10.click(presionFila10);
}

function presionFila10() {
  let cambioc = $("#punto10");
  cambioc.css("background-color", "#0000FF");
}



// // // //EJERCICIO 11



let cambio = $(document);
cambio.ready(comenzarevento);

function comenzarevento() {
  let lista = $("li");
  lista.click(presionItem);
}

function presionItem() {
  let esconder = $(this);
  esconder.hide();
}



// // EJERCICIO 12



let cambiador = $(document);
cambiador.ready(cambiodecolor);

function cambiodecolor() {
  let fila1 = $("#fila1");
  fila1.click(presionFila1);
}

function presionFila1() {
  let cambiarcolor = $("#fila1");
  cambiarcolor.css("background-color", "#0000FF");
}



// // EJERCICIO 13
function cambiarTam(n){
  let variable='.'+n;
  let texto1 = document.querySelector(variable);
  
  if (texto1.style.fontSize!="20px"){
    texto1.style.fontSize="20px";
  }else{
    texto1.style.fontSize="16px";
  }
}



// // EJERCICIO 14
function borrarCeldas(){
  let celdaId = "celda0";

  for (var i = 0; i<9; i++){
    
    let num = i.toString();
    celdaId=celdaId.slice(0,5)+num+celdaId.slice(6);
    let celda=document.getElementById(celdaId);
    celda.innerHTML="-";
    
  }
}

// // EJERCICIO 15



let hiper = $(document);
hiper.ready(cambiodehiper);


function cambiodehiper() {
  let b1 = $("#boton11");
  b1.click(hipervinculoGoogle);
  b2 = $("#boton2");
  b2.click(hipervinculoYahoo);
  b3 = $("#boton3");
  b3.click(hipervinculoMsn);
}

function hipervinculoGoogle() {
  let b11 = $("a");
  b11.attr("href", nombres[1]);
  b11.text("Google");
}

function hipervinculoYahoo() {
  let b22 = $("a");
  b22.attr("href", "http://www.yahoo.com");
  b22.text("Yahoo");
  
}

function hipervinculoMsn() {
  let b33 = $("a");
  b33.attr("href", "http://www.msn.com");
  b33.text("Msn");
}



// EJERCICIO 16

let palabras = $(document);
palabras.ready(desaparicion);

function desaparicion() {
  let desaparecer = $("strong");
  desaparecer.click(ocultarPalabra);
}

function ocultarPalabra() {
  $(this).hide();
}



// EJERCICIO 17
function cambioBack(celda) {
  celda.style.backgroundColor = "aqua";
}


// EJERCICIO 18
function punto18(celda) {
  if (celda.style.backgroundColor == "aqua") {
    celda.style.backgroundColor = "";
  } else {
    celda.style.backgroundColor = "aqua";
  }
}


// EJERCICIO 19


let tamano = 'grande'
document.getElementById('modificar').addEventListener('dblclick', (e) => {
    if (tamano == 'grande') {
        e.target.style.width = '250px'
        e.target.style.height = '250px'
        tamano = 'chico'
    } else {
        e.target.style.width = '800px'
        e.target.style.height = '70px'
        tamano = 'grande'
    }
})

//Ejercicio 20
var valorEnlace = document.getElementById("miLink").href;
document.getElementById("miLink").addEventListener("click", function(event0){
  event0.preventDefault()
  console.log(valorEnlace)
});

//Ejercicio 21

function enviarFormulario() {

	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let mensaje = document.getElementById("mensaje").value;
  let parrafo=document.getElementById('textoFinal');
  

  parrafo.textContent='los valores ingresados son: '+nombre+' / '+apellido+' / '+mensaje;
}










