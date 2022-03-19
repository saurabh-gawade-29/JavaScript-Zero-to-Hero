//! Array CURD Operations:

// 1: push()
// *Add element at the end of the array
const animal = ['goat', 'bull', 'cow']
const test = animal.push('chiken')
console.log(animal);

// *end of array returns new lenght of an array
console.log(test);
// Output: 

// *We can add multiple element at same time
animal.push("animal 1", 'animal 2', 'animal 3')
console.log(animal);


// 2: unshift()
// * Add the element in start of the array
const testUnshift = animal.unshift("animal unshift")
console.log(animal)

// * it will return the lenght of the new array
console.log(testUnshift)

//* it will return multiple element at the same time 
animal.unshift("animal4", "animal 5")
console.log(animal)


// * pop()
// * remove element from array at the end
// * returns the remove element

const plants = ['rose', 'mango', 'sunflower', 'tomato']
const popPlant = plants.pop()
console.log(plants);
// *it will return the pop element 
console.log(popPlant);


// 3: shift()
// *Remove element from array from start

const shiftplant = plants.shift()
console.log(plants)
// *it will return the shift element
console.log(shiftplant)
