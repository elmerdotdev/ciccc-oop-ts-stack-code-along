class Stack {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  remove() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  printStack() {
    let message = ''
    for (let i = this.items.length - 1; i >= 0; i--) {
      message += `\r\n[${i}] ${this.items[i]} `
    }
    return message
  }
}

module.exports = Stack