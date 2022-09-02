import { filterByRol } from './data.js';
import allData from './data/lol/lol.js'

const main = document.querySelector('main')

let campeones = [];// Haciendo array

let roleSelector = document.getElementById ("roles")
let difficultySelector = document.getElementById("difficulty")

const data=allData.data //Se importa la data en una variable "data"

const keys = Object.keys(data);
//console.log(keys.at(0)) // -> Sirve para acceder solamente al elemento seleccionado

//------- Lo que hicimos con Chris
for (let i = 0; i < keys.length; i++){
    campeones.push(data[keys[i]]) //Haciendo push a champions
}

//const personajes = Object.entries(data);
console.log('campeones', campeones)
//console.log('personajes', personajes)

//// ----------------------------------------------Lo que hicimos con Christian 
/*const difficultysPrueba = campeones.filter(campeon=>{
    return campeon.info.difficulty=="2"
})
console.log(difficultysPrueba)*/

//------lo que hicimos con Dani
roleSelector.addEventListener('change', (event) =>{
    console.log("evento value",event.target.value)
    let rolSeleccionado = event.target.value

    const todosLosRoles = filterByRol(rolSeleccionado, campeones)
    
    main.innerHTML='';
    todosLosRoles.forEach(campeon=>{
        let characters = campeon.name;
        let images = campeon.splash;
        let roles = campeon.tags;
        champions (characters, images, roles)
    })
});

difficultySelector.addEventListener('change', (event) =>{
    let difficultySeleccionado = event.target.value
    const todosLosRoles = filterByRol(roleSelector.value, campeones)
    
    const difficultyFiltered = todosLosRoles.filter(campeon =>{       
        return campeon.info.difficulty == Number (difficultySeleccionado)
    })
    console.log(difficultyFiltered)
    
    main.innerHTML='';
    difficultyFiltered.forEach (campeon =>{
        let characters = campeon.name;
        let images = campeon.splash;
        let roles = campeon.tags;
        champions (characters, images, roles)
    })
});
    



//---------- ciclo for y función para jalar la data a las tarjetas
for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let characters = data[key].name;
    let images = data[key].splash;
    let roles = data[key].tags;

    champions (characters, images, roles)
}

//console.log(roles[0][0]);

function champions(characters, images, roles){

    const card = document.createElement('div')
    card.className = "card";
    
    const img = document.createElement('img')
    img.src = images;

    const titleName = document.createElement('h3')
    titleName.textContent = characters + ' ' + roles;

    card.addEventListener('click', function(){
        lokoshon();
    })

    card.append(img, titleName)
    main.append(card)
}
    


/////Filtrado con .filter

//----------Esto fue con lo que nos ayudó rosa pero no jala bien
    /*const lokoshon = () => {
        let personajesRoles = [];
    for (let i = 0; i < keys.length; i++) {
        personajesRoles = data[keys.at(i)].filter(item => {
            item.tags === roles
        })
        
    }
    console.log(personajesRoles)
    }*/


/*const tags = ["Mage","Support","Tank","Fighter","Marksman","Assassin"];

const result = tags.filter(tags => tags.length > 6);

console.log(result);

////////// Haciendo filtrado (resultó ser un filtrado manual, se nos recomendó usar mejor .filter o .map)
/*let filtrados = [] // Solo los campeones que coincidan con el rol seleccionado
const roles = ["Mage","Support","Tank","Fighter","Marksman","Assassin"]  //Definiendo un array con todos los roles posibles
for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    for (let j=0; j < data[key].tags.length; j++) {
        if( data[key].tags[j] == roles[3]) {
            filtrados.push(data[key].name) // Obteniendo el nombre de los campeones que coinciden con el rol seleccionado
            break
        }
    }
}

console.log(filtrados);*/

// function OnSelected() {
//if( data[key].tags[j] == document.getElementByID("CuadroDeseleccion").string())
//}

//---------------------Esos dos son para intentar jalar la info de la data de roles y partype a al menú dropdown
/*const aline = [];
let roleSelector = document.getElementById ("roles")
//roles.forEach(oneRol => {
    const option = document.createElement('option')
    option.textContent = oneRol

    roleSelector.appendChild(option)
})

const chan = [];
let partypeSelector = document.getElementById ("partype")
partype.forEach(onePartype => {
    const option1 = document.createElement('option')
    option1.textContent = onePartype

    partypeSelector.appendChild(option1)
})*/