

/* Cambio de Color */

function colorBaige ()
{
   document.body.style.backgroundColor = '#FFFDD0';
   document.getElementsByClassName('mainn')[0].style.backgroundColor='#FFFDD0';
   document.getElementsByClassName('asidee')[0].style.backgroundColor='#FFFDD0';
   document.getElementById('perfil').style.backgroundColor='#FFFDD0';
   document.getElementsByClassName('barraEspaciadora')[0].style.backgroundColor='#FFFDD0';
   document.getElementsByClassName('botonTrabajo')[0].style.backgroundColor='#FFFDD0';

}

function colorBlanco ()
{
   document.body.style.backgroundColor = '#FFFFFF';
   document.getElementsByClassName('mainn')[0].style.backgroundColor='#FFFFFF';
   document.getElementsByClassName('asidee')[0].style.backgroundColor='#FFFFFF';
   document.getElementById('perfil').style.backgroundColor='#FFFFFF';
   document.getElementsByClassName('barraEspaciadora')[0].style.backgroundColor='#FFFFFF';
   document.getElementsByClassName('botonTrabajo')[0].style.backgroundColor='#FFFFFF';

}

document.getElementById('inicio').addEventListener ('click',
function ()
{
   colorBaige();
});

document.getElementById('nosotros').addEventListener ('click',
function ()
{
   colorBlanco();
});

document.getElementById('contacto').addEventListener ('click',
function ()
{
   colorBaige();
});

/* Para ver un Href de un objeto del DOM de forma panorármica usar window.location.href */

document.getElementById('acercaDe').addEventListener ('click',
function ()
{
   
   document.getElementById('segundoBloqueAcerca').style.display = 'block';
   window.location.href='#experiencia';
   
});

document.getElementById('actividad').addEventListener ('click',
function ()
{
   document.getElementById('segundoBloqueActividad').style.display = 'block';
   window.location.href='#primerBloqueAcerca';
   
});

document.getElementById('experiencia').addEventListener ('click',
function ()
{
   document.getElementById('primerBloqueExperiencia').style.display = 'block';
   document.getElementById('segundoBloqueExperiencia').style.display = 'block';
   document.getElementById('tercerBloqueExperiencia').style.display = 'block';
   window.location.href='#tercerBloqueActividad';
});

/* Formulario Validación */

const namePersona = document.getElementById('nombrePersona');
const lastNamePersona = document.getElementById('apellidoPersona');
const organizacionPersona = document.getElementById('organizacionPersona');
const emailPersona = document.getElementById('emailPersona');
const mensajePersona = document.getElementById('apellidoPersona');

const formValidacion = document.getElementById('formValidacion');

const errorNombre = document.getElementById('errorNombre');
const errorApellido = document.getElementById('errorApellido');
const errorOrganizacion = document.getElementById('errorOrganizacion');
const errorEmail = document.getElementById('errorEmail');
const errorMensaje = document.getElementById('errorMensaje');

/* Utilizo un Regex para validar los input del usuario*/
const nombreInputRegex = /^[a-zA-Z]+[\s]?[a-zA-Z]*$/;

/* Defino variable que contiene el icono check */
const checkValidacionIcono = document.getElementById('checkInputNombre');

/* Se hacen varios métodos que permitir+a su escalamiento e iteración*/
const valorPersona = teclaLevantada(namePersona);
const valorApellido = teclaLevantada(lastNamePersona);

/* Keyup es cuando se ingresa un caracter desde el usuario */
/* Blur es cuando el usuario deja el focus y va hacia otro elemento del documento */
function teclaLevantada (parametro) 
{
   parametro.addEventListener ('keyup', validarFormulario );
   
   parametro.addEventListener ('blur', validarFormulario );
}

/* Variable para trabajar la validacion general cuando todos los campos
   de todos los imputs esten trabajados*/
var validarForm = false;

document.getElementById('checkValidacionPersonaInput').style.display = 'none';

function validarFormulario (evento)
{
   
   /* target tiene muchas propiedades de las cuales utilizaremos el nombre
      de cada input del formulario para trabajarlo en casos dentro de un 
      switch según corresponda */
   
   switch(evento.target.name)
   {
      
      case "nombre":
         if (nombreInputRegex.test(evento.target.value))
         {
            document.getElementById('checkValidacionPersonaInput').style.display = 'block';
            document.getElementById('errorNombre').style.display = 'none';
            document.getElementById('errorNombreLength').style.display = 'none';
            document.getElementById('nombrePersona').style.border = '3px solid #06F727';
            
            /*Aqui se va trabajando la validación general*/
            validarForm = true;

            /* Palabra que simula que se completo todas las validaciones */ 
            if (evento.target.value == "enviar")
            {
               formValidacion.submit()
            }
            
            
         }
       
         else if (evento.target.value.length > 8)
         {
            document.getElementById('checkValidacionPersonaInput').style.display = 'none';
            document.getElementById('errorNombre').style.display = 'none';
            document.getElementById('errorNombreLength').style.display = 'block';
            document.getElementById('nombrePersona').style.border = '3px solid red';
            console.log('se paso de caracteres');
            validarForm = false;
         }
         else
         {
            document.getElementById('checkValidacionPersonaInput').style.display = 'none';
            document.getElementById('errorNombreLength').style.display = 'none';
            document.getElementById('errorNombre').style.display = 'block';
            document.getElementById('nombrePersona').style.border = '3px solid red';
            console.log('incorrecto');
            validarForm = false;
         }
      break;
      case "apellido":
         console.log('Funciona!');
      break;
      
   }
   
   console.log('Si el Evento no tiene el valor TRUE no se enviará');
   evento.preventDefault();
}

/* Evento que escucha el envío final del Formulario*/
formValidacion.addEventListener('submit', validarFormulario);




/* Importar datos desde la api Random User me */

const botonUsuario = document.getElementById('botonUsuario')

const fotoApi = document.getElementById('fotoUsuario')
const nombreApi =document.getElementById('nombre')
const emailApi =document.getElementById('correo')
const edadApi =document.getElementById('edad')
const direccionApi =document.getElementById('direccion')
const telefonoApi =document.getElementById('telefono')

/* Async lo que hace es devolver un valor desde una promesa que ha sido resolve y si 
   no puede devolver un valor o hay un error es cuando la promesa es reject */
   
/* Se usa async porque cuando hay un call a una red de datos existira siempre un delay */    

/* La función arrow tiene al return de manera implicita y se usa el try cuando se ejecuta el codigo,
   si hay algun error catch el error y muestralo. */
const generarUsuario = async () =>
{
   try
   {
      const urlApi = 'https://randomuser.me/api/';

      /* await pausa la ejecución de la función asíncrona y espera a la resolución de la Promesa */ 

      /* fetch es un método que inicia el proceso de obtener un recurso de un servidor 
         y  devuelve una promesa que se resuelve en un objeto de respuesta. */
      const respuestaApi = await fetch (urlApi);

      /* la palabra results entre llaves es una manera alternativa de acceder a las propiedades de un objeto. */
      const {results} = await respuestaApi.json();
      const datosApi = results[0];
      
      fotoApi.src = datosApi.picture.medium;
      nombreApi.textContent = datosApi.name.first + " " + datosApi.name.last; 
      emailApi.textContent = datosApi.email;
      edadApi.textContent = datosApi.dob.age;
      direccionApi.textContent = datosApi.location.street.name + " " + datosApi.location.street.number ;
      telefonoApi.textContent = datosApi.phone;
   }
   catch (error)
   {
      console.log(error);
   }
}

botonUsuario.addEventListener('click', generarUsuario);

/* Fecha del pie de página dinámica*/ 

let fechaFooter = new Date ();
document.getElementsByClassName('footerrSeparadorDos')[0].innerHTML = 
"@Copyright LinkCv - " + fechaFooter.getFullYear() + " - Derechos Reservados"; 


/* Menú slide */

document.getElementsByClassName('checkBtn')[0].addEventListener ('click',
function ()
{
   document.getElementsByClassName("menuEnlaces")[0].style.left = '0%';
   document.getElementById('audio').style.display = 'none';
   
});

document.getElementsByClassName('botonCierreMenu')[0].addEventListener ('click',
function ()
{
   document.getElementsByClassName("menuEnlaces")[0].style.left = '-200%';
   document.getElementById('audio').style.display = 'block';
   document.getElementById('audio').style.marginRight = '-10%';
});

/* Función Captcha
function onSubmit(token)
{
   document.getElementById("demo-form").submit();
}
 */
