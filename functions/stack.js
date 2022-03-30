function isValidStringNumber(arg) {
  if (typeof arg !== 'string') {
    return false
  }

  if (arg === "") {
    return false
  }


  const stringNum = Number(arg)

  const isNaN = Number.isNaN(stringNum)

  return !isNaN
}

function Stack (maxLength) {


  if (!(typeof maxLength === "number" || isValidStringNumber(maxLength)) ) {
    throw new Error(`the maxLength parameter is not number (maxLength value: ${maxLength})`)
  }

  const arr = []
  const max = Number(maxLength)

  function add(arg) {
    if (isFull()) {
      throw new Error('stack is full')
    }
    arr.push(arg)
  }

  function remove() {

    if (isEmpty()) {
      throw new Error('stack is empty')
    }

    arr.pop()
  }

  function isEmpty() {
    return arr.length === 0
  }

  function isFull () {
    return arr.length === max
  }

  function logStack () {
    console.log(`Stack: ${arr}`)
  }

  function getCurrentStack() {
    return arr.slice()
  }

  return {
    add,
    remove,
    logStack,
    getCurrentStack
  }
}

module.exports = {
  Stack,
}