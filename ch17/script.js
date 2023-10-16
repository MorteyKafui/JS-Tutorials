// asynchronous js
// console.log("Hello World");

// setTimeout(() => console.log("hi there!!!!!!!"), 2000);

// setInterval(() => console.log("hello"), 4000);

// console.log("Out there!!!!");
// console.log(123);
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise resolved");
    reject("something went wrong");
  }, 3000);
});

promise
  .then(result => console.log(result))
  .then(data => console.log(data))
  .catch(err => console.log(err));
