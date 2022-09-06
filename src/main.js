import allData from './data/lol/lol.js'
import { filterByRol, sortChampionsAscend, sortChampionsDescend } from './data.js';

const main = document.querySelector('main')
const data=allData.data //Se importa la data en una variable "data"

let campeones = [];// Haciendo array

let roleSelector = document.getElementById ("roles")
let difficultySelector = document.getElementById("difficulty")
let sortSelector = document.getElementById("sorting")

let rolSeleccionado = "All"; //Para el filtrado conjunto
let difficultySeleccionado = "All";


const keys = Object.keys(data);
//console.log(keys.at(0)) // -> Sirve para acceder solamente al elemento seleccionado

//------- Lo que hicimos con Chris
for (let i = 0; i < keys.length; i++){
    campeones.push(data[keys[i]]) //Haciendo push a champions
}

console.log('campeones', campeones)

function filtradoConjunto() {

    const campeonesFiltrados= filterByRol(campeones, rolSeleccionado, difficultySeleccionado);

    main.innerHTML='';
    campeonesFiltrados.forEach(campeon=>{
        let characters = campeon.name;
        let images = campeon.splash;
        let roles = campeon.tags;
        champions (characters, images, roles)
    })
}

roleSelector.addEventListener('change', (event) => {
    rolSeleccionado = event.target.value // Para cuando cambia el rol
    filtradoConjunto();
});

difficultySelector.addEventListener('change', (event) =>{
    difficultySeleccionado = event.target.value // Para cuando cambia la difficultad
    filtradoConjunto();
});

//-------------------------------Hasta aqui terminan los filtrados 

// Para el ordenado

sortSelector.addEventListener('change', (event) =>{
    const campeonesCopy = [...campeones]
    if (event.target.value === 'A to Z') {
        sortChampionsAscend(campeones);
    /*campeones.sort ((a, b) => {
        if (a.name < b.name) {
            return -1;
        }else 
            return 1;
        }
    )*/
}


    if (event.target.value === 'Z to A'){
        sortChampionsDescend(campeones);
    /*campeones.sort ((a, b) => {
        if (a.name > b.name) {
             return -1;
        }else 
            return 1;
        }
    )*/}
    filtradoConjunto(campeonesCopy)
    });


//---------- ciclo for y función para jalar la data a las tarjetas
for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let characters = data[key].name;
    let images = data[key].splash;
    let roles = data[key].tags;

    champions (characters, images, roles)
}

function champions(characters, images, roles){

    const card = document.createElement('div')
    card.className = "card";
    
    const img = document.createElement('img')
    img.src = images;

    const titleName = document.createElement('h3')
    titleName.textContent = characters + ' ' + roles;

    /*card.addEventListener('click', function(){
        lokoshon();
    })*/

    card.append(img, titleName)
    main.append(card)
}
 