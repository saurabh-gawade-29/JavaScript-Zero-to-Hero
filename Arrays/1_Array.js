// We cannot Store multiple value in variable
//❌ eg: let Alpha = "A", "B"

// But now we can store with Array
//* you can add multiple datatype values here
// var myFriends = ['harish', 'ash', 'shubham', 22 , true];
var myFriends = ["harish", "ash", "shubham"];

// Traversal / Navigate through Array
let name = myFriends[0];
console.log(name);

// Lenght is property not method
console.log(myFriends.length);
// Output: 3 

// You can to this way also
// ? Totol lenght(3) - 1 = 2 (Shubham)
console.log(myFriends[myFriends.length - 1]);


// Prototype
let myArray = new Array();
console.log(myArray, "my Array") 
// Output: [] 

// Length: It's a property not a method
console.log(myArray.length)
//! console.log(myArray.length()) Its not a method


//TODO: Your Last Elemenet ==> index - 1
//! Example
console.log(myFriends.length, "Length")
// 3 Length -- But your last element is in index -1


console.log(myFriends[myFriends.length -1])