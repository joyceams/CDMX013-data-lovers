import allData from './data/lol/lol.js'

const main = document.querySelector('main')
//const root = document.getElementById('root')

const data=allData.data 

const keys = Object.keys(data);

for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let characters = data[key].name;
    let images = data[key].splash;
    let roles = data[key].tags
console.log(roles)
champions (characters, images, roles)
}

function champions(characters, images, roles){
    
    const card = document.createElement('div')
    card.className = "card"

    const img = document.createElement('img')
    img.src = images;

    const titleName = document.createElement('h3')
    titleName.textContent = characters + ' ' + roles;

    card.append(img, titleName)
    main.append(card)
}

