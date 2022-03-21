//* Map method return new array
//* Original Array remains same
// ? map include callback function
//! TOO_IMP: Ability to Chain/Add other method

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArr = myArr.map((element, index, arr) => {
    return "see the output: " + element+ " index is " + index;
  });
  console.log(newArr);
  
