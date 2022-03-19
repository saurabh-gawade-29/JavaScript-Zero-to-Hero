//! ForEach
// ? Array.prototype.forEach()
// TODO: Call a function for each element in the array
 
//! WHY forEach ?
/*
    * in for in loop : index
    * in for of loop : elements
    * in forEach : index + elements
    * callback function required
*/

var myFriends = ["harish", "ash", "shubham"];
myFriends.forEach((element, index, array) => {
    console.log(element + " index: " + index, "which array we use: " + array);
});