/*
if statement
The if statement is the fundamental control statement 
that allowsto make decisions and execute statements conditionally.
*/

/*syntax

if (expression) {
   Statement(s) to be executed if expression is true
}

*/

var a = 30;

if (a > 20) {
  console.log("a is grater than 20");
}

/*
if...else statement
The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way.
*/

/*
Syntax:
if (expression) {
   Statement(s) to be executed if expression is true
} else {
   Statement(s) to be executed if expression is false
}
*/

var age = 15;

if(age > 18){
    console.log("You are an adult");
}
else{
    console.log("You are not adult");
}

/*
if...else if... statement
The if...else if... statement is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions.
*/

/*
if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
*/


var book = "Math"

if(book == "Math"){
    console.log("the book is Math");
}
else if(book == "Economics"){
    console.log("The book is Economics");
}
else if(book =="Java"){
    console.log("The book is JAVA");
}
else{
    console.log("the book is not here");
}

