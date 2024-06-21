const mainPlanes = document.querySelector('#mainP');
const planes = [{
    plan: 'Bronce',
    frecuencia: '1-3 veces por semana.',
    precio: 10
},
{
    plan: 'Plata',
    frecuencia: '3 veces por semana.',
    precio: 15
},
{
    plan: 'Oro',
    frecuencia: '5 veces por semana.',
    precio: 30
}
];
const divPlan = document.createElement('div');
mainPlanes.appendChild(divPlan);
for (const plan of planes){
    let literal = `Plan: ${plan.plan} - Frecuencia: ${plan.frecuencia} | Precio: U$D ${plan.precio}`
    const textoH4 = document.createElement('h4');
    textoH4.innerHTML = literal;
    divPlan.appendChild(textoH4);
};
divPlan.style.marginTop = '5rem';