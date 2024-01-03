const person = {
  name: "saurabh",
  walk: function () {
    console.log(this, "Now I Am Method");
  },
};
//How to call
person.walk(); // now its call line number 3 walk

// Now create one more function with same name

const walk = person.walk.bind(person);

console.log(walk);

//! Need to Check
