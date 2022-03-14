const functions = require('./count-word-in-sentence')

it(`returns 2 for the sentence: 'hellomynameishello' and word: 'hello'`, () => {
  expect(functions.countWordInSentence('hellomynameishello', 'hello')).toBe(2)
})

it(`returns 0 for the sentence: 'hellomynameishello' and word: 'goodbye'`, () => {
  expect(functions.countWordInSentence('hellomynameishello', 'goodbye')).toBe(0)
})

it(`returns 4 for the sentence: 'abcabcabcabc' and word: 'abc'`, () => {
  expect(functions.countWordInSentence('abcabcabcabc', 'abc')).toBe(4)
})

it(`returns null for the sentence: 'abcabcabcabc' and word: ''`, () => {
  expect(functions.countWordInSentence('abcabcabcabc', '')).toBe(null)
})

