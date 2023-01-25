# ticmas

Palabras del Alumno ---
Buenas tardes - noches: Agradezco las clases y rutas de aprendizaje de nuestro Profesor Daniel Rinaldi, asimismo sus consejos para que investiguemos más alla de la cursada para seguir avanzando como desarrolladores. En este caso FrontEnd y en un futuro llegar al BackEnd.

FASE 1: En la etapa 1 bajar a papel y dibujar los prototipos es una gran herramienta para hacer un viable modelado de negocio.
Una vez concluida la etapa 2 y 3 de la consigna, incluida la RESPONSIVIDAD, me animé no solo a usar la foto sino a importar los datos en json desde la API de randomuser. A través del click en el boton "Link Cv" podrá importar los datos en json y convertirlos a objetos javascript para ser mostrados en el navegador.

FASE 2: Funcionalidades de Javascript a través de los botones que requiere la consigna:
Acerca De Actividad Experiencia
También utilice el boton que le llaman Sandwich que podrá apreciar cuando llegue al mediaquery movil para mostrar y ocultar el menú gracias a Javascript
Como último utilice Regex para validar los imput y aún es un interesante mundo para seguir aprendiendo.

Código del Alumno --- link del repositorio público
https://github.com/joelcai2/ticmas/tree/gh-pages

Hay algunas cuestiones que el servidor no esta considerando.

La primera es que en las url de todos los archivos de CSS no se cargan correctamente. Solo el HTML de github pages toma correctamente las rutas.
Podrá ver:
linea 40 del archivo MAIN de la carpeta CSS - Ingreso el URL con el path correctamente con doble comillas
linea 134 del archivo ASIDE de la carpeta CSS - Ingreso el URL con el path correctamente con una comilla
linea 205 del archivo ASIDE de la carpeta CSS - Ingreso el URL con el path con el permalink
Y asi sucesivamente sin resultados positivos.

La segunda es la responsividad del display none y block de javascript. Podra ver el historial del archivo FOOTER de la carpeta CSS que tiene un problema con esta
funcionalidad. Incluso cambie la funcionalidad de primer versionado que andaba bien en local por una estructura flex responsive para las siguientes actualizaciones, 
además en la línea 125 del archivo javascript de la carpeta JS intento forzar todos los campos sin resultado positivo.

En escritorio anda 10 puntos la funcionalidad.

Por lo demás agradezco todas las clases brindadas.

