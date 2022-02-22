/*
*The const keyword was introduced in ES6 (2015).

*Variables defined with const cannot be Redeclared.

*Variables defined with const cannot be Reassigned.

*Variables defined with const have Block Scope.
*/

const PI = 3.1415926535;
PI = 3.14;

//console.log(PI); //! TypeError: Assignment to constant variable.


//? Incorrect Way: 
const a;
a = "must be declare when asigned"
//console.log(a); //! SyntaxError: Missing initializer in const declaratio

/*
?Use const when you declare:

*A new Array
*A new Object
*A new Function
*A new RegExp
*/


