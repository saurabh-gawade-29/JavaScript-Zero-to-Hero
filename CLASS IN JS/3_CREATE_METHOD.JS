class Car {
    constructor(name){
        this.brand = name;
    }
    // TODO: Create Method
    myMethod(){
        return 'i have a '+ this.brand;
    }
}

const mycar = new Car("BMW")
// Need to call the method
//!ERROR => mycar.myMethod();
//TODO: we need to show to user via print this 
console.log(mycar.myMethod());