const person = {
    name: "saurabh",
    age: 24,
    cars: {
        car1 : "BMW",
        car2 : "LAMBO"
    }
}

//* you can access the nested object using .(dot)
const a = person.cars.car1
console.log(`saurabh fav car is ${a}`)