// function greet() {
//   console.log("Hello World!!!");
// }

// // call/execute/invoke the func.
// greet();

// const greet = function () {
//   console.log("Hi there!");
// };

// greet();

// const greet = () => {
//   console.log("Hello from arrow func.");
// };

// greet();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// const add = function (num1, num2) {
//   console.log(num1 + num2);
// };

// const add = (num1, num2) => console.log(num1 + num2);

// add(500, 10);
// add(20, 47);

// function getUserName(username) {
//   return "Hi " + username;
// }

// const bob = getUserName("Alice");
// console.log(bob);

function getTotalPrice(amount, price = 10) {
  return amount * price;
}

const result = getTotalPrice(3, 20);
console.log(result);
