const plates = [1, 2, 3, 4, 5]
const tempPlates = [] // temp


// Get 3
const plate5 = plates.pop() // 5
tempPlates.push(plate5) // Add plate5 to temp plates
const plate4 = plates.pop() // 4
tempPlates.push(plate4) // Add plate4 to temp plates

const plate3 = plates.pop() // 3
console.log('Got plate:', plate3)

plates.push(tempPlates.pop()) // removes plate 4 from temp and adds it to the orig plates
plates.push(tempPlates.pop()) // removes plate 5 from temp and adds it to the orig plates

console.log('ORIGINAL PLATES:', plates)
console.log('TEMP PLATES:', tempPlates)

// Last-In, First-Out