import allData from './data/lol/lol.js'

const main = document.querySelector('main')
//const root = document.getElementById('root')

const data=allData.data 

const keys = Object.keys(data);
for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    //console.log(data[key]);
}

keys.forEach(k => {
    console.log(k)
    const card = document.createElement('div')
    card.className = "card"

    const img = document.createElement('img')
    img.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg"

    const titleName = document.createElement('h3')
    titleName.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    card.append(img, titleName)
    main.append(card)
})

