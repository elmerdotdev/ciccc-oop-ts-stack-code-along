const Stack = require('./Stack')

function removeOranges(stack) {
  const tempStack = new Stack()
  let count = stack.size() 

  while (count > 3) {
    tempStack.add(stack.remove()) // remove all elements before oranges
    count--
  }
  stack.remove() // oranges

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove()) // return all elements from temp stack to orig
  }
}

const fruits = new Stack()
fruits.add("apples")
fruits.add("bananas")
fruits.add("oranges")
fruits.add("grapes")
fruits.add("mangoes")

console.log(fruits.printStack())
removeOranges(fruits)
console.log(fruits.printStack())