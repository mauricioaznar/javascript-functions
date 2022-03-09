const functions = require('./index')

it(` passes when 'asdf assd as!'`, () => {
    expect(functions.isWords('asdf assd as!')).toBe(true)
})

it(` passes when 'asdf assd as'`, () => {
    expect(functions.isWords('asdf assd as')).toBe(true)
})

it(` passes when '    asdf assd as    '`, () => {
    expect(functions.isWords('    asdf assd as    ')).toBe(true)
})