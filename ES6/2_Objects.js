const person = {
  name: "Saurabh",
  walk: function () {
    console.log("Hello method");
  },
  talk() {},
};

//! what is methods and what is function
//* we know functions
//** if a function is present in object we reffered that function as a method

// how to Call?
person.walk(); //This is a function that's why its called when program is executed
person["name"]; // not print when the program is executed
console.log(person["name"]);
