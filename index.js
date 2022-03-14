const functions = require('./functions/is-word')

function isWords (str) {
  const trimmedStr = str.trim()
  const words = trimmedStr.split(" ")
  return words.every((val) => {
    return functions.isWord(val)
  })
}

//Regular expressions

const str = 'strIngi'
const regex = /i/gi

console.log(Array.from(str.matchAll(regex)))



module.exports = {
  isWords
}
