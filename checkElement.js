const Stack = require('./Stack')

function checkElement(stack, element) {
  let foundFlag = false
  const tempStack = new Stack()

  while(!stack.isEmpty() && !foundFlag) {
    let lastItem = stack.remove()
    if (lastItem === element) {
      foundFlag = true
    }
    tempStack.add(lastItem)
  }

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove())
  }

  return foundFlag
}

const numbers = new Stack()
numbers.add(5)
numbers.add(3)
numbers.add(4)
numbers.add(2)
numbers.add(8)


const result = checkElement(numbers, 1)
console.log(result)
console.log(numbers.printStack())
