/*
The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.
*/

/* 
switch (expression) {
   case condition 1: statement(s)
   break;
   
   case condition 2: statement(s)
   break;
   ...
   
   case condition n: statement(s)
   break;
   
   default: statement(s)
}
 */

// Here grade is Key
var grade = "A";
console.log("Entering to SwitchCase Block");

switch (grade) {
    case 'A': console.log("A Grade <br />");
    break;

    case 'B': console.log("B Grade <br />");
    break;

    case 'C': console.log("C Grade <br />");
    break;

    default: console.log("Default Statement is Here");
        break;
}

// *Break statements play a major role in switch-case statements.
// !if you not put break keyword then next conditions excute as well