const {formatNumber} = require('./add-format-to-numbers')

it('Does not format the number when it is less than 4 digits:', ()=>{
    expect(formatNumber(220)).toBe('220')
})

it('Does format the number when it is 4 - 6 digits:', ()=>{
    expect(formatNumber(51428)).toBe('51,428')
})

it('Does format the number when it is 7 - 9 digits:', ()=>{
    expect(formatNumber(51428238)).toBe('51,428,238')
})

it('Does format the number when it is 9 or more digits:', ()=>{
    expect(formatNumber(5142823889780)).toBe('5,142,823,889,780')
})