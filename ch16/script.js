// // Parent / Base constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}`);
// };

// // Child / Derived constructor
// function Student(name, age, subject, school) {
//   Person.call(this, name, age);
//   this.subject = subject;
//   this.school = school;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function () {
//   console.log(
//     `My name is ${this.name} and I Study ${this.subject} at ${this.school}`
//   );
// };

// const s1 = new Student("Alice", 30, "Computer Science", "MIT");
// const s2 = new Student("Bob", 19, "Engineering", "MIT");
// // console.log(s1.greet());
// // console.log(s1.study());
// console.log(s2);
// console.log(s2.study());
// console.log(s2.greet());

// // const p = new Person("Bob", 25);
// base class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} yrs old`);
  }
}

// child class

class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }

  study(subject) {
    console.log(`The course I read is ${subject}`);
  }
}

const s1 = new Student("Bob", 23, "MIT");

// console.log(s1.greet());
// console.log(s1.study("Engineering"));
console.log(s1.study("Maths"));

// class Employee extends Person {
//   constructor() {
//     console.log("Hello Employee");
//   }
// }
