// Function: 

function add(num1, num2){
    console.log(num1+num2);
}

add(2,2)

// method:
/*
JavaScript Methods: A JavaScript method is a property of an object that contains a function definition. Methods are functions stored as object properties. Object method can be accessed with the following syntax:
*/
 object1 = {
    firstname: "saurabh",
    lastname: "gawade",
    // Object method
    method1: function(){
        console.log(this.firstname +" "+ this.lastname);
    }
 }