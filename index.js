const{ formatDecimals } = require('./functions/add-format-to-numbers')



// const decimalSeparator = numToArray.indexOf(".")
// numToArray = numToArray.slice(decimalSeparator,numToArray.length)
// let number = Math.round(Number(numToArray.join("")))
// number = Math.round(number)/100

console.log('formatDecimals', formatDecimals(33.427, 2))

