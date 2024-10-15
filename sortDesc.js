const Stack = require('./Stack')

function sortDesc(stack) {
  const tempStack = new Stack();
  
  while(!stack.isEmpty()) {
    const lastOrigItem = stack.remove()
    while(!tempStack.isEmpty() && tempStack.peek() > lastOrigItem) {
      // if last item of temp is less than the last item of orig stack
      stack.add(tempStack.remove()) // put last item of temp to orig stack
    }
    tempStack.add(lastOrigItem)
  }

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove())
  }
}

const numbers = new Stack()
numbers.add(4)
numbers.add(5)
numbers.add(3)
numbers.add(1)
numbers.add(2)

sortDesc(numbers)

console.log(numbers.printStack())