function addCommasToNumberSolution (num) {
  const strNum = String(num)
  const arrNum = strNum.split('')
  let newArr = []
  for (let i = arrNum.length - 1; i >= 0; i = i - 3) {
    if (i - 2 > 0) {
      const block =  arrNum.slice(i - 2 , i + 1)
      newArr.unshift(',', ...block)
    } else {
      newArr.unshift(...arrNum.slice(0, i + 1))
    }
  }
  return newArr.join("")
}

module.exports = {
  addCommasToNumber: addCommasToNumberSolution
}