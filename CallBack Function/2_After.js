//TODO:  What is Callback?
//? A callback is a function passed as an argument to another function
//* This technique allows a function to call another function
//* A callback function can run after another function has finished

const funcA = (name, callFunction) => {
  console.log(`Function A is Called from ${name}`);
  callFunction();
};

const funcB = () => {
    console.log(`function B is Called from Callback`);
};

funcA("saurabh", funcB);