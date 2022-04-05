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
    return wordBackwards.toString() === str.split('').toString()
}

// function isPalindrome (str) {
//   if (str.length % 2 === 1) {
//     const part1 = str.slice(0, Math.floor(str.length / 2))
//     const part2 = str.slice(Math.floor(str.length / 2) + 1, str.length)
//     return part1 === part2.split("").reverse().join("")
//   } else {
//     const part1 = str.slice(0, Math.floor(str.length / 2))
//     const part2 = str.slice(Math.floor(str.length / 2), str.length)
//
//     return part1 === part2.split("").reverse().join("")
//   }
// }

module.exports = {
    isPalindrome
}