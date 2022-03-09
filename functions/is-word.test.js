const functions = require('./is-word')



it(`fails when arg is 'abc2'`, () => {
  expect(functions.isWord('abc2')).toBe(false)
})

it(`passes when arg is 'abc!'`, () => {
  expect(functions.isWord('abc!')).toBe(true)
})

it(`fails when arg is 'abc'`, () => {
  expect(functions.isWord('abc')).toBe(true)
})

it(`fails when arg is 'Abc'`, () => {
  expect(functions.isWord('Abc')).toBe(true)
})

it(`fails when arg is ' Abc '`, () => {
  expect(functions.isWord(' Abc ')).toBe(false)
})

it(`fails when arg is ' Abc def '`, () => {
  expect(functions.isWord(' Abc dev ')).toBe(false)
})