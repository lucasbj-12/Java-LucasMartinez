console.dir(document);
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
for (let i = 1; i <= 8; i++) {
    let ingresaNombre = prompt("Agendar turnos.");
    alert("Turno N° " + i + " Nombre: " + ingresaNombre)
}
//Calcular peso a reducir
function pesoAreducir(pesoActual, pesoExpectativa){
    let resultado= pesoActual - pesoExpectativa;
    return resultado;
}
console.log(pesoAreducir(68,65));
//Alumnos a entrenar.
function Alumno2(nombre, apellido, edad, altura, peso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
}
const lucas = new Alumno2("Lucas", "Martinez", 27, 1.60, "66kg");
console.log("Lucas: ", lucas);
const javier = new Alumno2("Javier", "Correa", 30, 1.75, "82kg");
console.log("Javier: ", javier);
const laura = new Alumno2("Laura", "Rodriguez", 32, 1.58, "79kg");
console.log("Laura: ", laura);

class Producto{
    constructor(id, nombre, precio){
        this.id=id;
        this.nombre=nombre.toUpperCase();
        this.precio=parseFloat(precio);
    }
    sumarIva(){
        this.precio = this.precio * 3.50;
    }
}
const productosGym = [];
productosGym.push(new Producto(1, "Creatinas", 37000));
productosGym.push(new Producto(2, "Proteinas", 30000));
productosGym.push(new Producto(3, "Accesorios para alumnos", 10600));
productosGym.push(new Producto(4, "Maquinarias", 600000));
productosGym.push(new Producto(5, "Indumentaria", 30000));
console.log(productosGym);
for(const index of productosGym){
index.sumarIva();
};
//Funciones de orden superior.
productosGym.forEach((Producto) => {
    console.log(Producto);
});
//Tiempo restante para comenzar con el entrenamieto.
const HOY = new Date(2024,6,5);
const COMIENZO = new Date("August, 25, 2024");
const RESTANTE = COMIENZO - HOY;
const MILISEGUNDOS_DIA = 60 * 60 * 24 * 1000;
console.log(MILISEGUNDOS_DIA);
const RESTANTE_EN_DIAS = (COMIENZO-HOY) /MILISEGUNDOS_DIA;
console.log("Faltan: " + RESTANTE_EN_DIAS + " dias para comenzar con tu entrenamiento!!!");
//Operaciones.
const suma = function (a, b) { return console.log(a + b) }
const resta = function (a, b) { return console.log(a - b) }
suma(90, 120);
resta(150, 130);
//DOM.
const tituloH1 = document.getElementById('titulo');
console.log(tituloH1.innerText);
tituloH1.innerText = "Entrenadores personales en linea";
console.log(tituloH1.innerText);
tituloH1.style.color = 'red';
tituloH1.style.backgroundColor =  'black';
tituloH1.style.padding = '10rem';
///////
const cuerpo = document.body;
cuerpo.style.backgroundColor ='grey';
cuerpo.style.padding = '5rem';
///////
const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo';
articuloDiv.classList.add('notas', 'texto');
cuerpo.appendChild(articuloDiv);