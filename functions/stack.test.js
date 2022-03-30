const { Stack } = require('./stack')

it('creates stack', () => {
  const stack = Stack(2)
  expect(stack).toBeDefined()
})

it('fails when maxLength parameter is not a number', () => {
  ['asdfasdf', null, undefined].forEach(arg => {
    expect(() => {
      Stack(arg)
    }).toThrow(`${arg}`)
  })

})

it('passes when maxLength parameter is valid', () => {
  ['3', 2].forEach(arg => {
    expect(() => {
      Stack(arg)
    }).not.toThrow()
  })

})


it('adds to stack', () => {
  const stack = Stack(2)
  stack.add(2)
  stack.add(4)
  expect(stack.getCurrentStack()).toEqual([2, 4])
})

it('removes to stack', () => {
  const stack = Stack(2)
  stack.add(2)
  stack.add(4)
  expect(stack.getCurrentStack()).toEqual([2, 4])
  stack.remove()
  expect(stack.getCurrentStack()).toEqual([2])
})

it('forbid to add to stack when full', () => {
  const stack = Stack(2)
  stack.add(2)
  stack.add(4)
  expect(() => {
    stack.add(4)
  }).toThrow(/full/i)

})

it('forbid to remove to stack when empty', () => {
  const stack = Stack(2)
  stack.add(2)
  stack.add(4)
  stack.remove()
  stack.remove()
  expect(() => {
    stack.remove()
  }).toThrow(/empty/i)

})