/*
! The let keyword was introduced in ES6 (2015).
* Variables defined with let cannot be Redeclared.
* Variables defined with let must be Declared before use.
* Variables defined with let have Block Scope.
*/

let a = "saurabh"
let a = "harish"
// console.log(a); // !SyntaxError: Identifier 'a' has already been declared


var name1 = "saurabh"
var name1 = "harish"
//console.log(name1); //? Not give an error

/*
!Block Scope
*Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

*ES6 introduced two important new JavaScript keywords: let and const.

*These two keywords provide Block Scope in JavaScript.

*Variables declared inside a { } block cannot be accessed from outside the block
*/

{
    let blockScope = "block scope and {} <= this is block"
    //console.log(blockScope); //?block scope
}
    let blockScope = "test text"; 
    //! we can Use/Redeclare here with same varibale name
    //console.log(blockScope); //! ReferenceError: a is not defined
