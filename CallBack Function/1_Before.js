// ! First Part - BEFORE
// const funcA = ()=>{
//     console.log("Function A is Called");
// }

// const funcB = ()=>{
//     console.log("Function B is Called");
// }

// Need to Call: First Call -> First Output
// funcA();
// funcB();

// TODO: Now We Add SetTimeout()
const funcA = () => {
  setTimeout(() => {
      console.log("Function A is Called");
      funcB();
  }, 3000);
};

const funcB = () => {
  console.log("Function B is Called");
};

funcA();
// funcB();

// ! but Now we get wrong output 
// * 1st called Function B instead of A
// * Bcoz of setTimeout() 

// ? Solve : Call function B in function A as a Callback
// ! But its A Wrong Approach so JS introduce Callbacks