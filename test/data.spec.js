import { filterByRol, sortChampionsAscend, sortChampionsDescend } from '../src/data.js'
import allData from '../src/data/lol/lol.js'

const campeones2 = [
    {
      name: "Aatrox",
    info: {
      difficulty: 4
    },
    tags: ["Fighter", "Tank"]
  },
  {
    name: "Jinx",
    info: {
      difficulty: 6
    },
    tags: ["Marksman"]
  },
  {
    name: "Lux",
    info: {
      difficulty: 5
    },
    tags: ["Mage", "Support"]
  },
  {
    name: "Viktor",
    info: {
      difficulty: 9
    },
    tags: ["Mage"]
  },
]

const correctFilter = [
  {
    name:"Viktor",
    info: {
      difficulty: 9
    },
    tags: ["Mage"]
  },
]

const campeones3 = [
  {
  name:"Viktor",
  info: {
    difficulty: 9
  },
  tags: ["Mage"]
},
{
  name: "Lux",
  info: {
    difficulty: 5
  },
  tags: ["Mage", "Support"]
},
{
  name:"Jinx",
  info: {
    difficulty: 6
  },
  tags: ["Marksman"]
},
  {
    name:"Aatrox",
  info: {
    difficulty: 4
  },
  tags: ["Fighter", "Tank"]
}
]

const campeones = [
  
{
  name:"Jinx",
  info: {
    difficulty: 6
  },
  tags: ["Marksman"]
},
{
  name:"Viktor",
  info: {
    difficulty: 9
  },
  tags: ["Mage"]
},
{
  name:"Aatrox",
info: {
  difficulty: 4
},
tags: ["Fighter", "Tank"]
},
{
  name: "Lux",
  info: {
    difficulty: 5
  },
  tags: ["Mage", "Support"]
},
]

describe('data', () => {
  it('is an object', () => {
    expect(typeof allData).toBe('object');
  })
})

const rolSeleccionado = "Mage"
const difficultySeleccionado = 9

describe('filterByRol', () => {
  it('is a function', () => {
    expect(typeof filterByRol).toBe('function')
  })
})

it('Filters the champions by their rol', () => {
  expect(filterByRol(campeones, rolSeleccionado, difficultySeleccionado)).toEqual(correctFilter);
})

describe('sortChampionsAscend', () => {
  it('is a function', () => {
    expect(typeof sortChampionsAscend).toBe('function')
  })
 
  it('Sorts champions from A to Z', () => {
    expect(sortChampionsAscend(campeones)).toEqual(campeones2)
  })
})
  it('Sorts champions from Z to A', () => {
    expect(sortChampionsDescend(campeones)).toEqual(campeones3)
    
  })
