// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}`);
// };

// const p1 = new Person("Bob", 30);
// const p2 = new Person("Alice", 20);
// console.log(p2.greet());

// console.log(p1.greet());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.name = "";
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect1 = new Rectangle(10, 40);
const rect2 = new Rectangle(30, 50);

console.log(rect1);
