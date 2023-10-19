// Destructuring
// const colors = ["red", "Yellow", "Blue", "Violet"];

// const [firstColor, , thirdColor] = colors;

// console.log(thirdColor);

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const { name = "Admin", age, city: state } = person;

// console.log(person.age);

console.log(name);
console.log(age);
console.log(state);
