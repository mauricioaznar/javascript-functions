const { Stack } = require('./functions/stack')


const stack1 = Stack(3)

stack1.add(2)
stack1.add(3)
stack1.add(4)
stack1.remove()
stack1.add(5)
const arrLength = stack1.remove()

stack1.remove()
stack1.remove()

try {
  stack1.remove()
} catch (e) {
  console.log(e.message)
}

console.log('----------------')

stack1.add(5)
stack1.add(5)
stack1.add(5)
try {
  stack1.add(5)
} catch(e) {
  console.log(e.message)
}
console.log('----------------')


try {
  const stack2 = Stack('asdfasdf')
} catch (e) {
  console.log(e.message)
}


console.log('----------------')


stack1.logStack()

