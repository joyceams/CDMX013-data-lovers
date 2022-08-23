import allData from './data/lol/lol.js'

const main = document.querySelector('main')
//const root = document.getElementById('root')

let campeones = [];

const data=allData.data 

const keys = Object.keys(data);

for (let i = 0; i < keys.length; i++){
    campeones.push(data[keys[i]])
    
}
console.log(campeones)

campeones.forEach(campeon =>{
console.log(campeon.tags)
})

const personaje = Object.entries(data);
console.log(personaje)

/*for (const [key, value] of personaje) {
    console.log(`Key => ${key} | Value => ${value}`);
}*/

for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let characters = data[key].name;
    let images = data[key].splash;
    //let roles = data[key].tags;

champions (characters, images)
}

function champions(characters, images){
    
    const card = document.createElement('div')
    card.className = "card"

    const img = document.createElement('img')
    img.src = images;

    const titleName = document.createElement('h3')
    titleName.textContent = characters; //+ ' ' + roles;

    card.append(img, titleName)
    main.append(card)
}


/*Object.filter = function(mainObject, filterFunction){
    return Object.assign(...Object.keys(mainObject)
        .filter( function(ObjectKey){
            return filterFunction(mainObject[ObjectKey])
        })
        .map(function(ObjectKey){
            return {[ObjectKey]: mainObject[ObjectKey]};
        }) );
}
//console.log(keys);

const championNames = Object.filter(keys, (key)=> key = 'Aatrox');

//console.log(championNames)*/