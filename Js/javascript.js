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

document.getElementById('suma').addEventListener('click',
function ()
{
   let primerNumero = document.getElementById('numeroUno').value;
   console.log("El primer número ingresado es:" + primerNumero);

   let segundoNumero = document.getElementById('numeroDos').value;
   console.log("El primer número ingresado es:" + segundoNumero);

   let resultadoSuma = suma(primerNumero,segundoNumero);
   console.log("El resultado de la suma es:" + resultadoSuma);

   document.getElementById('resultadoSuma').innerHTML = resultadoSuma;
   document.getElementById('contenedorResultado').style.display = 'block';

})

function suma (numeroUno,numeroDos)
{
   let resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);
   return resultadoSuma;

}