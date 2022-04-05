function isPair(str) {
    return str.length % 2 === 0
}


function isPalindrome(str) {
    const original = str.split("")
    const l = original.length
    let wordBackwards = []
    for(let i = 0; i < l; i++){
        let letter = original.pop()
        wordBackwards.push(letter)
    }
    wordBackwards = wordBackwards.toString()
    console.log(wordBackwards===str.split('').toString())
    return wordBackwards===str.split('').toString()
}

module.exports = {
    isPalindrome
}