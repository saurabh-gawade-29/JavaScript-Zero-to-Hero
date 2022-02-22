/*
*ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

*JavaScript Classes are templates for JavaScript Objects.
*/

// This Alone
let x = this;
console.log(x); //* Output: {}

//? Best Practice Declare object with const
//? object contain single and muliple value

//? single value
const person = "name"

//? multiple value
const person1 = {
    firstnName: "saurabh",
    lastname: "gawade",
    id: 1,
    fullname: function(){
        console.log(this.firstnName + " " + this.lastname);
    }
}
// console.log(person1);
// console.log(person1.fullname());


/*
*In JavaScript, the this keyword refers to an object.

*Which object depends on how this is being invoked (used or called).

*The this keyword refers to different objects depending on how it is used:

*In an object method, this refers to the object.
*Alone, this refers to the global object.
*In a function, this refers to the global object.
*In a function, in strict mode, this is undefined.
*In an event, this refers to the element that received the event.
*Methods like call(), apply(), and bind() can refer this to any object.
*/


