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



// // EJERCICIO 14



let borrador = $(document);
borrador.ready(borrar);

function borrar() {
  let goma = $("#boton1");
  goma.click(borrar1raTabla);
}

function borrar1raTabla() {
  let eliminar = $("#tabla1 td");
  eliminar.text("-");
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
  b11.attr("href", "http://www.google.com");
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



// EJERCICIO 18



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
