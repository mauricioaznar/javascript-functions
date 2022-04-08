const{ formatDecimals} = require('./functions/add-format-to-numbers')

const numero = 4566.567
let numToArray = formatDecimals(numero,2)

// const decimalSeparator = numToArray.indexOf(".")
// numToArray = numToArray.slice(decimalSeparator,numToArray.length)
// let number = Math.round(Number(numToArray.join("")))
// number = Math.round(number)/100

console.log(numToArray)

