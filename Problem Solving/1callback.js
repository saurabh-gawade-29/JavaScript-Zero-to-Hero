// 1.Explain What is callback and give a simple example
function checkCallback(arr, callback, callback2) {
  debugger;
  arr.push(100);
  callback();
  callback2();
}
let arr = [];

checkCallback(
  arr,
  function () {
    debugger;
    arr.push(200);
    console.log("what is this");
  },
  () => {
    debugger;
    arr.push(300);
    console.log("Now what is this");
  }
);
