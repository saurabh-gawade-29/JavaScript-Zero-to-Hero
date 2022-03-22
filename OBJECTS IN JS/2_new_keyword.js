// Create Object Using new keyword
const person = new Object();
// Add key and value to Person object
person.firstName = "Saurabh";
person.lastName = "Gawade";

console.log(person);

// Obejcts are Mutable :
// ! They are address by ref
// ? that means if you do any changes in person automatic affect in variable x
const x = person; //* Will not create a copy of person.
console.log(x);

