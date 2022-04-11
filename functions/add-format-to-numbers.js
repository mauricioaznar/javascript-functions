function formatInteger(number){
    const arrNumber = number.toString().split("")
    const l1 = arrNumber.length
    let rest = l1
    for (let i = 0; i < Math.floor(l1/3);i++){
        arrNumber.splice(rest-3,0,",")
        rest = arrNumber.indexOf(",")
    }
    if(arrNumber.indexOf(",")===0){
        arrNumber.shift()
    }
    return arrNumber
}

function formatDecimals (number,decimalToBeDisplayed){
    let numToArray = number.toString().split("")
    if(numToArray.indexOf(".")<0){
        numToArray = 0
        return Number(numToArray)
    } else {
        numToArray = numToArray.slice(numToArray.indexOf("."), numToArray.length)
        numToArray = Math.round(Number(numToArray.join("")) * Math.pow(10, decimalToBeDisplayed)) / Math.pow(10, decimalToBeDisplayed)
        return numToArray
    }
}

function formatNumber(num,decimalsToBeDisplayed) {
    const numString = num.toString().split("")
    if (numString.indexOf('.')>=0) {
        let decimalPart = numString.slice(numString.indexOf("."),numString.length)
        let integerPart = Number(numString.slice(0,numString.indexOf(".")).join(""))
        decimalPart = Number(decimalPart.join(""))
        decimalPart = formatDecimals(decimalPart,decimalsToBeDisplayed)
        if (decimalPart === 1){
            integerPart = integerPart + decimalPart
             return formatInteger(integerPart).join("")
        }else{
            decimalPart = decimalPart.toString().split("")
            decimalPart = decimalPart.slice(decimalPart.indexOf("."),decimalPart.length)
            return formatInteger(integerPart).concat(decimalPart).join("")
        }
    } else {
        return formatInteger(num).join("")
    }

}


module.exports = {
    formatInteger,
    formatDecimals,
    formatNumber
}