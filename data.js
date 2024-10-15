const students = [
  { id: 1, firstName: "John", lastName: "Smith" },
  { id: 2, firstName: "Joe", lastName: "Smith" },
  { id: 3, firstName: "Jill", lastName: "Smith" },
]

// LIFO (Last-In, First-Out)
const plates = [1,2,3,4,5,6,7,8,9,10] // for loop, reduce
plates.pop() // 10
plates.pop() // 9
console.log(plates.pop()) // 8

// FIFO (First-In, First-Out)
plates.shift() // 1
console.log(plates.shift()) // 2

// Singly linked list // doubly linked list
const train = [appleCarriage, bananasCarriage, orangeCarriage, grapesCarriage, carrotCarriage, mangoCarriage]
const appleCarriage = {
  prev: null,
  value: "apples",
  next: mangoCarriage
}
const bananasCarriage = {
  prev: appleCarriage,
  value: "bananas",
  next: mangoCarriage
}
const grapesCarriage = {
  prev: appleCarriage,
  value: "grapes",
  next: orangeCarriage
}
const orangeCarriage = {
  prev: grapesCarriage,
  value: 'oranges',
  next: carrotCarriage
}
const carrotCarriage = {
  prev: orangeCarriage,
  value: 'carrots',
  next: null
}
const mangoCarriage = {
  prev: bananasCarriage,
  value: "mangoes",
  next: grapesCarriage
}


const smithFamily = [john, jack, jill, joe]
const john = {
  value: "John",
  left: jack,
  right: jill
}

const jack = {
  value: "Jack",
  left: joe,
  right: null
}

const jill = {
  value: "Jill",
  left: null,
  right: null
}

const joe = {
  value: "Joe",
  left: joey,
  right: null
}

const joey = {
  value: "Joey",
  left: null,
  right: null
}



const gamingCafe = {
  "Player 1": ["Player 3", "Player 5"],
  "Player 2": [],
  "Player 3": ["Player 1", "Player 4"],
  "Player 4": ["Player 3", "Player 5"],
  "Player 5": ["Player 1", "Player 4"]
}

const loggedInUser = "coolguy"

// one-way hash function

const result = "hvniuekgyuv8912csr3"

const userAndPW = {
  "hvniuekgyuv8912csr3": "12345",
  "dfdqwdqwdfewfsxsa": "41231"
}


// LIFO - Stack
const dinnerPlates = [1, 2, 4, 5]
const tempPlates = []