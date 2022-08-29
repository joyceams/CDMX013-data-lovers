import allData from './data/lol/lol.js'

const main = document.querySelector('main')

let campeones = [];// Haciendo array

const data=allData.data //Se importa la data en una variable "data"

const keys = Object.keys(data);
//console.log(keys.at(0)) // -> Sirve para acceder solamente al elemento seleccionado


for (let i = 0; i < keys.length; i++){
    campeones.push(data[keys[i]]) //Haciendo push a champions

}

console.log(campeones)

campeones.forEach (campeon =>{
    console.log(campeon.name)
})

const personajes = Object.entries(data);
console.log(personajes)

//let roles = [];

for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let characters = data[key].name;
    let images = data[key].splash;
    let roles = data[key].tags;
    //roles.push(data[key].tags)
    console.log(roles);

    champions (characters, images)
}

//console.log(roles[0][0]);

function champions(characters, images, roles){

    const card = document.createElement('div')
    card.className = "card";
    
    const img = document.createElement('img')
    img.src = images;

    const titleName = document.createElement('h3')
    titleName.textContent = characters //+ ' ' + roles;

    card.append(img, titleName)
    main.append(card)
}

/////Filtrado con .filter

const tags = ["Mage","Support","Tank","Fighter","Marksman","Assassin"];

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