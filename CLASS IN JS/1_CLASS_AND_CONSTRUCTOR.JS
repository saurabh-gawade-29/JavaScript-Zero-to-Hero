// Class :
/*
*A JavaScript class is not an object.
*It is a template for JavaScript objects.
*/

class Person{
    /*
        !The Constructor Method
        ?The constructor method is a special method:

        *It has to have the exact name "constructor"
        *It is executed automatically when a new object is created
        *It is used to initialize object properties
        *If you do not define a constructor method, JavaScript will add an empty constructor method.
    */

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//TODO: Create a object outside the class:
// ? Constructor call automatically after creating object

const myPerson = new Person("saurabh", 24);
console.log(myPerson.name +" "+ myPerson.age);
