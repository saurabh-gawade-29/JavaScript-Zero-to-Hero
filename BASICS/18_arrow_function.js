//! Before

let x = function myFunction(){
    console.log("this is a basic function");
}
console.log(x); //? it will return an array
//* [Function: myFunction]


// just remove name of function
// and put this => symbol
//! function without name : Anonymous Function
//TODO: After
let y = ()=>{
    console.log("this is a arrow function");
}

/*
It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
*/
let greet = ()=> "Hello World";


// With Parameter
let greetWithParameter = (para1)=> "Hello World" + para1;
// Call function and passvariable name with that variable name
greetWithParameter("saurabh");



