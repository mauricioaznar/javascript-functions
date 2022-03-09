function isWord (str) {
  const lowerStr = str.toLowerCase()
  const arrStr = lowerStr.split('')
  return arrStr
    .every((val) => {
      return (val.charCodeAt(0) >= 97 && val.charCodeAt(0) <= 122) || val.charCodeAt(0) === 33
    })
}


module.exports = {
  isWord
}
