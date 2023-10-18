// Rest AND Spread Parameter
// let max = Math.max(100, 2, 10, 47.39, 36);
// console.log(max);
// const addAll = (a, b, c, d,e,f,g,) => {
//   return a + b + c + d;
// };

// console.log(addAll(20, 20, 40, 3, 2));
// const addAll = (a, b, c = 10, ...values) => {
//   let sum = 0;

//   console.log(values);
//   console.log(a);
//   console.log(b);

//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// };

// console.log(addAll(1, 10, 4, 59, 36, 4));
// let arr = [1, 2, 3, 100];

// console.log(Math.max(...arr));
// const names1 = ["John", "Doe"];
// const names2 = ["Alice", "Bob"];

// const mergedNames = [...names1, ...names2];
// console.log(mergedNames);
const message = "hello World";
console.log([...message]);
