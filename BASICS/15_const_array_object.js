/*
! Constant Objects and Arrays
? The keyword const is a little misleading.

*It does not define a constant value. It defines a constant reference to a value.

?Because of this you can NOT:

*Reassign a constant value
*Reassign a constant array
*Reassign a constant object

?But you CAN:

*Change the elements of constant array
*Change the properties of constant object
*/

//!  TOO IMP

//* const cars = ['BMW', 'MARUTI', 'HONDA']
// cars[0] = "TOYOTA" //? You can change the element in array after const keyword
//console.log(cars);


//! BUT do not do like this it will give an error
//* const bike = ['BMW', 'Royal', 'Hero']
// bike = ['Honda', 'Royal', 'Hero'] //! Wrong Way
//console.log(bike);

//TODO: ______________Objects_____________
//! Object have a property inside 

const obj1 = {
    id : 1,
    type: "car",
    color: "red",
    brand: "Honda",
}
// ? You can change a property
obj1.color = "yellow";
console.log(obj1);

//? You can Add a property
obj1.owner = "Saurabh";
console.log(obj1);






