function countWordInSentence(sentence, word) {
  if (word === '') return null;
  let count = 0
  const splitSentence = sentence.split("")
  for (let i = 0; i < splitSentence.length; i++) {
    let char = splitSentence[i]
    if (char === word[0] && i + word.length <= splitSentence.length) {
      const foundWord = splitSentence.slice(i, i + word.length).join("")
      if (foundWord === word) {
        count++
      }
    }
  }
  return count
}

module.exports = {
  countWordInSentence
}
