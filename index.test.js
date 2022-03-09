const functions = require('./index')



it('sum returns 6 when 3 + 3', () => {
    const a = 3
    const b = 3

    expect(functions.sum(a, b)).toBe(6)
})

it('sum returns 6.05 when 3 + 3.05', () => {
    const a = 3
    const b = 3.05

    expect(functions.sum(a, b)).toBe(6.05)
})

it('sum not 5 when 3 + 3', function asdfa () {
    expect(functions.sum(3, 3)).not.toBe(5)
})

it('returns null when a is not a number', () => {
    expect(functions.sum('asdfasd', 2)).toBe(null)
})


it ('returns sorted array', () => {
    expect(functions.sortAsc([4,3,6])).toEqual([3,4,6])
    expect(functions.sortAsc([4,3])).toEqual([3, 4])
    expect(functions.sortAsc([])).toEqual([])
})

it('returns null when arg is not an array', () => {
    expect(functions.sortAsc("")).toBe(null)
})


it('sortDesc returns an array in descending order', () => {
    expect(functions.sortDesc([1,3,2,5])).toEqual([5,3,2,1])
})





