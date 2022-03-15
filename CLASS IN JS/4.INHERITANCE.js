class Car {
  constructor(name) {
    this.brand = name;
  }

  myMethod() {
    return "i have a " + this.brand;
  }
}

class Model extends Car {
  //TODO: Need to pass the parameter
  constructor(name2, name) {
    // Access parent class parameter using Super keyword
    super(name);
    this.model = name2;
  }

  myMetod2() {
    return this.myMetod1() + " and model is " + this.model;
  }
}

// TODO: Need to create child class object
const myCar = new Model("BMW", "BMW-Model");
console.log(myCar.myMetod2());
