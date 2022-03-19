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
