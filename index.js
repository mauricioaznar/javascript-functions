const functions = require('./functions/is-word')

function isWords (str) {
  const trimmedStr = str.trim()
  const words = trimmedStr.split(" ")
  return words.every((val) => {
    return functions.isWord(val)
  })
}


module.exports = {
  isWords
}
