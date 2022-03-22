const Person = {
    name: "Saurabh",
    age: 24,
    cars: [
        {
            name: "BMW",
            model: ["x2", "x1"]
        },
        {
            name: "lambo",
            model: ["x3", "x4"]
        }
    ]
}

const a = Person.cars.name;
console.log(a) //undefined

// need ForEach Loop or Need for in loop