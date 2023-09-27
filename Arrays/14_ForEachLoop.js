let myFamily= ["saurabh", "komal", "pradeep", "pratiksha"]

// For Each Loop basically its a callback function who takes 3 args as below
myFamily.forEach((element, index, array)=> console.log(element, index, array))

//!Output:

/*
saurabh 0 [ 'saurabh', 'komal', 'pradeep', 'pratiksha' ]
komal 1 [ 'saurabh', 'komal', 'pradeep', 'pratiksha' ]
pradeep 2 [ 'saurabh', 'komal', 'pradeep', 'pratiksha' ]
pratiksha 3 [ 'saurabh', 'komal', 'pradeep', 'pratiksha' ]
*/