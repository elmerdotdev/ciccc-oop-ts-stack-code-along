const Stack = require('./Stack')

function getMaxMin(stack) {
  const tempStack = new Stack()
  let minNum = stack.peek() // 38
  let maxNum = stack.peek() //  38

  // orig: [10, 15, 3, 72, 38]
  // temp: []
  // curr: 10
  // min: 3
  // max: 72

  while(!stack.isEmpty()) {
    let curr = stack.remove() // current top item of orig stack
    minNum = Math.min(curr, minNum) // compare and set the new min num
    maxNum = Math.max(curr, maxNum) // compare and set the new max num
    tempStack.add(curr) // add top item to temp stack
  }

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove()) // return items from temp to orig stack
  }

  return { min: minNum, max: maxNum }
}

const numbers = new Stack()
numbers.add(10)
numbers.add(15)
numbers.add(13)
numbers.add(150)
numbers.add(72)
numbers.add(38)

console.log(numbers.printStack())
const result = getMaxMin(numbers)
console.log(result)