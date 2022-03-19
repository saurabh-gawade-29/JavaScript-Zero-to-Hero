// Searching Methods
var myFriends = ["harish", "ash", "shubham", "saurabh"];

// 1: indexof()
console.log(myFriends.indexOf("ash", 0));
//!  where 0 in indexof is Starting point for search
//* indexOf do Forword Search
//* if output not get then return -1

// 2: lastIndexOf()
//* Diff: lastindexOf do Backword Search
//* But : it will give output in positive index
console.log(myFriends.lastIndexOf("shubham"));

// 3: includes()
console.log(myFriends.includes("ash"));
//* Ouput: True : boolean datatype
console.log(myFriends.includes("ash", 2));
//* Forword Search

// 4: find()
const price = [100, 200, 300, 400, 500, 600];
const test = price.find((curValue) => {
  return curValue < 400;
});
console.log(test);
//* find() method need one call back function
//* find() return only one element


// 5: findIndex()
const testFI = price.findIndex((curValue)=>{
    console.log(curValue < 400);
})
//* findIndex() shows the index of find element
//* return only one element

