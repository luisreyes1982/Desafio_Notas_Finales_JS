


document.write("<div class='container'>"); //crea el div que contendrá los elementos
document.write("<h1>Notas Finales</h1>");

var nombre = prompt("Escriba su nombre "); //Elemento prompt que solicita la variable nombre
var carrera = prompt("Indique carrera "); //Elemento prompt que solicita la variable carrera

document.write("<p>Nombre " + nombre + "</p>"); //Construye el parrafo que mostrará la variable nombre 
document.write("<p>Carrera " + carrera + "</p>"); //Construye el parrafo que mostrará la variable carrera

var Nota_Min = prompt("indique nota minima de aprobacion");
//Construye table
document.write("<table class='table'>");//Construye table
document.write("<thead class='bg-dark text-white'>");//Abre encabezado de la table
document.write("<tr>");//Fila de encabezado
document.write("<th scope='col'>Ramo</th>");//Celda de encabezado de columna 1
document.write("<th scope='col'>Nota 1</th>");//Celda de encabezado de columna 2
document.write("<th scope='col'>Nota 2</th>");//Celda de encabezado de columna 3
document.write("<th scope='col'>Nota 3</th>");//Celda de encabezado de columna 4
document.write("<th scope='col'>Promedio</th>");//Celda de encabezado de columna 5
document.write("</tr>");// Cierra la fila de encabezado
document.write("</thead>");//Cierra encabezado de la table
document.write("<tbody>");//Abre el cuerpo de la tabla

//PRIMERA FILA 
document.write("<tr>");//Abre la Fila 1
var ramo = prompt("indique ramo 1 ", "HTML"); //Elemento prompt que solicita la variable ramo
document.write("<th scope='row'>" + ramo + "</th>");//Construye el parrafo que mostrará la variable ramo
var nota1 = prompt("indique nota 1 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota1 de la variable nota1
document.write("<td>" + nota1 + "</td>");//Construye el parrafo que mostrará la variable nota1
var nota2 = prompt("indique nota 2 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota2 de la variable nota2
document.write("<td>" + nota2 + "</td>");//Construye el parrafo que mostrará la variable nota2
var nota3 = prompt("indique nota 3 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota3 de la variable nota3
document.write("<td>" + nota3 + "</td>");//Construye el parrafo que mostrará la variable nota3
//Calcula el promedio
var promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

document.write("<td>" + promedio.toFixed(2) + "</td>");//Aplica método para redondear arriba con dos decimales la variable promedio y Construye el parrafo que mostrará la variable 
document.write("</tr>");//Cierra el elemento tr fila 1

//SEGUNDA FILA
document.write("<tr>");//Abre la Fila 2
ramo = prompt("indique ramo 2 ");//Elemento prompt que solicita la variable ramo
document.write("<th scope='row'>" + ramo + "</th>");//Construye el parrafo que mostrará la variable 
nota1 = prompt("indique nota 1 (" + ramo + ")", "1.0 a 7.0"); //Elemento prompt que solicita la variable nota3 de la variable nota1
document.write("<td>" + nota1 + "</td>");//Construye el parrafo que mostrará la variable  nota1
nota2 = prompt("indique nota 2 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota3 de la variable nota2
document.write("<td>" + nota2 + "</td>");//Construye el parrafo que mostrará la variable nota2 
nota3 = prompt("indique nota 3 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota3 de la variable nota3
document.write("<td>" + nota3 + "</td>");//Construye el parrafo que mostrará la variable nota3 
//Calculo de promedio
promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
document.write("<td>" + promedio.toFixed(2) + "</td>");//Construye el parrafo que mostrará la variable 
document.write("</tr>");//Cierra el elemento tr fila 2

//TERCERA FILA
document.write("<tr>");//Abre la Fila 3
ramo = prompt("indique ramo 3 ");//Elemento prompt que solicita la variable ramo
document.write("<th scope='row'>" + ramo + "</th>");//Construye el parrafo que mostrará la variable 
nota1 = prompt("indique nota 1 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota3 de la variable nota1
document.write("<td>" + nota1 + "</td>");//Construye el parrafo que mostrará la variable  nota1 
nota2 = prompt("indique nota 2 (" + ramo + ")", "1.0 a 7.0");//Elemento prompt que solicita la variable nota3 de la variable nota2
document.write("<td>" + nota2 + "</td>");//Construye el parrafo que mostrará la variable nota2 
document.write("<td>-</td>");//Construye el parrafo que mostrará la variable nota 3 de ramo js
document.write("<td>-</td>");//Construye el parrafo que mostrará la variable promedio de ramo js
document.write("</tr>");//Cierra elemento tr Fila 3
//Calculo de la nota necesaria para llegar al promedio nota_min
var nota = (Nota_Min * 3) - (parseFloat(nota1) + parseFloat(nota2));


//CUARTA Final
document.write("<tr>")
//Construye el parrafo que mostrará la variable nota que se requiere para aprobar especificando la variable ramo al que corresponde y la variable de nota minima que se requiere para aprobar
document.write("<td>Para aprobar el ramo de " + ramo + " con nota " + Nota_Min + " necesitas " + nota.toFixed(2) + " en la ultima nota </td>");
document.write("</tr>");
//cierra elementos contenedores contruidos
document.write("</tbody>");
document.write("</table");
document.write("</div>");



