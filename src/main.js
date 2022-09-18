import allData from './data/lol/lol.js'
import { filterByTag, sortChampionsAscend, sortChampionsDescend } from './data.js'

const main = document.querySelector('main')
const data = allData.data // Se importa la data en una variable "data"

const champions = []// Haciendo array

const tagSelector = document.getElementById('roles')
const difficultySelector = document.getElementById('difficulty')
const sortSelector = document.getElementById('sorting')

let tagSelected = 'All' // Para el filtrado conjunto
let difficultySelected = 'All'

const keys = Object.keys(data)
// console.log(keys.at(0)) // -> Sirve para acceder solamente al elemento seleccionado

// Lo que hicimos con Chris
for (let i = 0; i < keys.length; i++) {
 champions.push(data[keys[i]]) // Haciendo push a champions
}

function jointFilter () {
    const championsFiltered = filterByTag(champions, tagSelected, difficultySelected)

    main.innerHTML = ''
    championsFiltered.forEach(champion => {
    const characters = champion.name
    const images = champion.splash
    const tags = champion.tags
    items(characters, images, tags)
    })
    // Haciendo el calculo de Porcentaje de  champions con el rol seleccionado
    const percentage = championsFiltered.length / champions.length  
    console.log("===============");
    console.log("Porcentaje de campeones " + tagSelected + " con dificultad de " + difficultySelected + ": " + percentage*100 + "%");
    console.log("===============");

}

tagSelector.addEventListener('change', (event) => {
  tagSelected = event.target.value // Para cuando cambia el rol
    jointFilter()
})

difficultySelector.addEventListener('change', (event) => {
  difficultySelected = event.target.value // Para cuando cambia la difficultad
  jointFilter()
})

// Hasta aqui terminan los filtrados

// Para el ordenado

sortSelector.addEventListener('change', (event) => {
    const championsCopy = [...champions]
    if (event.target.value === 'A to Z') {
    sortChampionsAscend(champions)
    }

    if (event.target.value === 'Z to A') {
    sortChampionsDescend(champions)
    }
    jointFilter(championsCopy)
})

// ---------- ciclo for y función para jalar la data a las tarjetas
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const characters = data[key].name
    const images = data[key].splash
    const tags = data[key].tags

    items(characters, images, tags)
}

function items(characters, images, tags) {
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src = images

    const titleName = document.createElement('h3')
    titleName.textContent = characters + ' ' + tags

    card.append(img, titleName)
    main.append(card)
}
