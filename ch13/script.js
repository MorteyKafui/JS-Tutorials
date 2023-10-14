// "use strict";

// console.log(this);

//  "this" keyword

// console.log(this);
// console.log(window);

// const greet = function () {
//   console.log(this);
// };

// greet();

// console.log(globalThis);

// const person = {
//   username: "Bob",
//   age: 20,
//   isAdmin: true,
//   job: "Software Engineer",
//   getName: function () {
//     console.log(this);
//   },
// };

// console.log(person.getName());

// function greet() {
//   console.log(this);
// }

// greet();

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});
