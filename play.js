// // // Create an 10x10 matrix of null values
// // let nullVector = () => Array(10).fill(null);
// // let nullArray = nullVector().map(nullVector);

// // const single = (_) => console.log("hello");
// // console.log(single());

// //creating a mixin
// var mixin = {
//   getName() {
//     console.log(`Name is ${this.name}`);
//   },
//   getSides() {
//     console.log(`Sides are ${this.sides}`);
//   },
// };

// //creating a constructor Shape
// function Shape(shapeName, shapeSides) {
//   this.name = shapeName;
//   this.sides = shapeSides;
// }

// //setting mixin to be the prototype of Shape
// Shape.prototype = mixin;
// //setting constructor of prototype equal to Shape
// Shape.prototype.constructor = Shape;

// //creating a new Shape
// var rectangle = new Shape("Rectangle", 4);
// rectangle.getName();
// rectangle.getSides();
