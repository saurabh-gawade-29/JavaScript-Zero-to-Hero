const car = {
    name: "BMW",
    model: "x2",
    year: 2022
}
// Access using => objectName.propertyName
const carName = car.name;
console.log(carName);

// Access usign => objectName["propertyName"]
const carModel = car["model"];
console.log(carModel)

// Using for in Loop
for(let carFor in car){
    // Statement
}
