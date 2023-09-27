//*A function is a group of reusable code 
//*which can be called anywhere in your program

// Example: alert(), write()

//! syntax:
/* 
function functionname(parameter-list) {
         statements
      }
*/

function hello(){
    console.log("Hello World");
}

hello();


// Function With Parameter

function greet(msg, name){
    console.log(msg +" "+ name);
}
greet("Good Morning", "Saurabh");


// Function with Default parameter
function defaultParam(a, b=5){
    return a * b
}

console.log(defaultParam(5));
