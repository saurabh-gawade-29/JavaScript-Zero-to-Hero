/* 
! Hoisting is JavaScript's default behavior -
! of moving declarations to the top.
*/


//! Basics

//TODO: not declare datatype
x = 5;
console.log(x);
console.log(typeof(x));

var x; //? Declare x 

//! Let & const Keyword:
y = 5;
let y;
const y
console.log(y); //! it will give an ref error


//TODO: We can Do like this it will not give an error
var num1 = 5;
console.log(num1+num2);
var num2 = 5;

/*
!JavaScript in strict mode does not allow variables to be used if they are not declared.
*/