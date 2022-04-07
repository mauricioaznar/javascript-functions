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

module.exports = {
    formatNumber
}