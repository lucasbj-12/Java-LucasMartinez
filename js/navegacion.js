//Bienvenida
alert("Bienvenido/a.");
let nombres = prompt("Ingrese su nombre");
console.log(nombres);
let ingreseSuApellido = prompt("Ingrese su apellido")
console.log(ingreseSuApellido)
const VACIO = "";
if (nombres != VACIO && ingreseSuApellido != VACIO) {
    alert("Su nombre es: " + nombres + " " + ingreseSuApellido)
} else {
    alert("Falta ingresar informacion")
}
let numero = prompt("Ingrese su edad");
console.log(numero > 18);
if (numero >= 18) {
    alert("Su edad es de " + numero + " Años, entonces es mayor de edad")
} else if (numero <= 18 && numero != VACIO) {
    alert("Su edad es de " + numero + " Para poder ingresar debe ser mayor de edad.");
} else {
    alert("La edad ingresada es incorrecta.")
}
let cuestionario = prompt("Cuantos dias a la semana desea entrenar? (1,3,5)");
console.log(cuestionario > 0);
if (cuestionario == 1) {
    alert("Se le recomienda el Plan Bronce de entrenamiento.")
} else if (cuestionario == 3) {
    alert("Se le recomienda el Plan Plata de entrenamiento.")
} else if (cuestionario == 5) {
    alert("Se le recomienda el Plan Oro de entrenamiento.")
}
for (let i = 1; i <= 3; i++) {
    let ingresaNombre = prompt("Agendar turnos.");
    console.log("Turno N° " + i + " Nombre: " + ingresaNombre)
}
//Barra de navegacion
const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';
const links = ["Index", "Planes", "Beneficios", "Insumos"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear(); 


cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/logo.png';
img.alt = 'CoderHouse';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
};


cabecera.style.backgroundColor = '#c2c2c2';

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'CoderHouse - ' + TIME + ' | Comisión #57705';