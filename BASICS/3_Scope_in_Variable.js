// !Scopes
// ?Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
// ?Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

var myVar1 = "Global"
function ScopeTest(){
    var myVar2 = "Local"
    console.log(myVar2);
}
console.log(myVar1);
// console.log(myVar2); //!myVar2 is not defined
ScopeTest();
// We cannot access local variable outside the function