//Productos en stock
const cuerpoinsu = document.body;
let insumos = [{
    id: 1,
    nombre: 'Creatinas',
    precio: 23700.80
},
{
    id: 2,
    nombre: 'Proteinas',
    precio: 29800.75
},
{
    id: 3,
    nombre: 'Batidos',
    precio: 2500
},
{
    id: 4,
    nombre: 'Indumentaria',
    precio: 'Consultar..'
}
];
const divInsumos = document.createElement('div');
cuerpoinsu.appendChild(divInsumos);
for (const insumo of insumos){
    let literal = `ID: ${insumo.id} - Nombre: ${insumo.nombre} | Precio: $${insumo.precio}`
    const textoH4 = document.createElement('h4');
    textoH4.innerHTML = literal;
    divInsumos.appendChild(textoH4);
};
///Storage
const guardarEnStorage = (key, value) => {localStorage.setItem(key, value)};
guardarEnStorage("Productos", JSON.stringify(insumos));
console.log(JSON.parse(localStorage.getItem(insumos)));