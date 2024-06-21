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
tituloH1.style.padding = '2rem';
///////
cuerpo.style.backgroundColor ='white';
///////
const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo';
articuloDiv.classList.add('notas', 'texto');
cuerpo.appendChild(articuloDiv);
///Eventos
const mainIndex = document.querySelector('#mainI');
const boton = document.createElement('button');
boton.textContent = 'Ingresar';
boton.type = 'button';
mainIndex.appendChild(boton);
boton.style.backgroundColor = 'red';
boton.style.padding = '1rem';
boton.style.width = '6rem';
boton.style.margin = '2rem';
boton.style.fontSize = '1rem';

boton.onclick = () => {
alert("No es posible ingresar en este momento.");
};