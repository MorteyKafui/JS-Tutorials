const person = {
  name: "Bob",
  age: 20,
  job: "Web developer",
  isEmplyed: true,
  // greet() {
  //   console.log("Hello " + this.name);
  // },
  greet: function () {
    console.log("Hello " + this.name);
  },
};

console.log(person.name);
console.log(person.greet());
