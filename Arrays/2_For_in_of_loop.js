// With the help of index we will get only one data at a time now we use loops

var myFriends = ["harish", "ash", "shubham"];

// !its a Baisc For Loop
/*
for(i=0; i < myFriends.length; i++){
    console.log(myFriends[i]);
}
*/

for(let elements in myFriends){
    console.log(elements);
}
//TODO: Output will be index

for(let elements of myFriends){
    console.log(elements)
}
//TODO: Output will be Actual data on index