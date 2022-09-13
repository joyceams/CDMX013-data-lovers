import { filterByRol } from '../src/data.js'
import allData from '../src/data/lol/lol.js'

const campeones = [
    {
      name:"Aatrox",
    info: {
      difficulty: 4
    },
    tags: ["Fighter", "Tank"]
  },
  {
    name:"Jinx",
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
    name:"Viktor",
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


/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function')
  })
  
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG')
  })
}) */

describe('pruebaconChristian', () => {
  const miNombre = 'Joyce'
  it('is a string', () => {
    expect(typeof miNombre).toBe('string')
  })

  it('is Joyce', () => {
    expect(miNombre).toBe('Joyce')
  })
});