function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(
    i,
    "the variable out of block but we can still access that using var"
  );
}
sayHello();
// ! IMP: value of i out of block is 5
/*
*ANS: 
1. the var variable is in block scope now
2. but we can access that variable in functuion scope means in sayHello Function
3. we get error if we try to access that varibale outside function
*/

/*
0
1
2
3
4
5 the variable out of block but we can still access that using var
 */

//! How Let Solve this ?

function sayHello2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //  ! if you uncomment this you will get error
  //   console.log(
  //     i,
  //     "You cannot access this varibale i in for loop coz its in block scope"
  //   );
}

sayHello2();

//! Now what about const
const x = 1;
console.log(x, "make constant");
// x = 2; //! you cannot reassign the value in const

//! LET VS CONST
/* 
    *ANS:
    1. if you want to create block scope we can create using let and const
    2. main diff is we cannot re-assign the value 
*/
