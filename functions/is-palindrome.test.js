const { isPalindrome } = require('./is-palindrome');

const validStrings = [
    'abba',
    'aba',
    'hannah',
    '231132'
]


validStrings.forEach((str) => {
    it(`passes when ${str}`, () => {
        expect(isPalindrome(str)).toBe(true)
    })
})


const invalidStrings = [
    'abbaa',
    'hannahh',
    '0230',
    'fernando',
    '23127132'
]

invalidStrings.forEach((str) => {
    it(`fails when ${str}`, () => {
        expect(isPalindrome(str)).toBe(false)
    })
})

