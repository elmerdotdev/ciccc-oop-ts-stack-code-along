const Stack = require('./Stack')

function removeElements(stack) {
  while(!stack.isEmpty()) {
    stack.remove()
  }
}

const fruits = new Stack()
fruits.add('apple')
fruits.add('banana')
fruits.add('orange')
fruits.add('mango')

console.log('Before:', fruits.printStack())
removeElements(fruits)
console.log('After:', fruits.printStack())