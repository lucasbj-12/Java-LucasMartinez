alert ("Bienvenido/a.");
let nombres = prompt("Ingrese su nombre");
console.log(nombres);
let ingreseSuApellido = prompt("Ingrese su apellido")
console.log(ingreseSuApellido)
const VACIO = "";
if(nombres!= VACIO && ingreseSuApellido!= VACIO) {
    alert("Su nombre es: " + nombres + " " + ingreseSuApellido)
} else{
    alert("Falta ingresar informacion")
}
let numero = prompt ("Ingrese su edad");
console.log(numero >18);
if (numero>=18){
    alert("Su edad es de "+ numero + " Años, entonces es mayor de edad")
}else if (numero<=18 && numero!= VACIO){
    alert("Su edad es de "+ numero + " Para poder ingresar debe ser mayor de edad.");
} else{
    alert("La edad ingresada es incorrecta.")
}
let peso = prompt ("Ingrese su peso en kg.");
console.log(peso >0);
if(peso>0) {
    alert("Su peso es de: " + peso)
} else if (peso<=0 && peso !=VACIO){
    alert("Su peso debe ser mayor a 0kg.")
} else{
    alert("La informacion ingresada es incorrecta.")
}
let altura = prompt("Ingrese su altura");
console.log(altura >0);
if(altura >0 && altura!= VACIO) {
    alert("Su altura es de: " + altura)
} else{
    alert("Debe ingresar su altura")
}
let cuestionario = prompt("Cuantos dias a la semana desea entrenar? (1,3,5)");
console.log(cuestionario >0);
if(cuestionario == 1){
    alert("Se le recomienda el Plan Bronce de entrenamiento.")
}else if(cuestionario == 3){
        alert("Se le recomienda el Plan Plata de entrenamiento.")
}else if(cuestionario == 5){
        alert("Se le recomienda el Plan Oro de entrenamiento.")
    }
    for (let i = 1; i <= 20; i++){
        let ingresaNombre = prompt ("Agendar turnos.");
        console.log("Turno N° "+i+ " Nombre: "+ ingresaNombre)
    }
const suma = function (a,b){return console.log(a + b)}
const resta = function (a,b){return console.log(a - b)}

suma(90,120);
resta(150,130);
