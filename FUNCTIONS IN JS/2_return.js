/*
*A JavaScript function can have an optional return statement. 
!This is required if you want to return a value from a function. This statement should be the last statement in a function.
*/

function add(num1, num2){
    sum = num1 + num2;
    return sum;
}

// Above function use to return logic

// Below Function is use to show output of function
function showReturn(){
    var result;
    result = add(5, 5)
    console.log("the sum is:" + result);
}

//! Need to Call second function
showReturn();

