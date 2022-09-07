/* eslint-disable no-unused-vars */
import { example, anotherExample } from '../src/data.js'

/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function')
  })

  it('returns `example`', () => {
    expect(example()).toBe('example')
  })
})

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
})
