document.getElementById('botonCambioTexto').onclick = function ()
{
   console.log("Inicia el cambio de Texto");
   document.getElementById("parrafoUno").innerHTML = "Texto Cambiado"; 
}

document.getElementById('botonCambioColor').addEventListener ('click',
function ()
{  
   document.body.style.backgroundColor = '#EFFD5F';
})

document.getElementById('botonRestablecerColor').addEventListener ('click',
function ()
{
   document.body.style.backgroundColor = '#FFFFFF';
})


const colleccionVerde = document.getElementsByClassName("parrafoVerde");
let contadorUno = 0;
for (contadorUno;contadorUno < colleccionVerde.length;contadorUno++)
{
   colleccionVerde[contadorUno].style.backgroundColor = '#06F727';
}

