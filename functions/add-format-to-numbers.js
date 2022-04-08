function formatNumber(number){
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
    return arrNumber.join("")
}

function formatDecimals (number,decimalToBeDisplayed){
    let numToArray = number.toString().split("")
    if(numToArray.indexOf(".")<0){
        numToArray = 0
        return Number(numToArray)
    }else {
        numToArray = numToArray.slice(numToArray.indexOf("."), numToArray.length)
        numToArray = Math.round(Number(numToArray.join("")) * Math.pow(10, decimalToBeDisplayed)) / Math.pow(10, decimalToBeDisplayed)
        return numToArray
    }
}

module.exports = {
    formatNumber,
    formatDecimals
}