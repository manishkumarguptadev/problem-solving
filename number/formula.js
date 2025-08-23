const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
// console.log(celsiusToFahrenheit(25))
const FahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
// console.log(calculateCircleArea(5));

const kmToMile = (kms) => kms * 0.621371;

const feetToMeters = (feet) => feet * 0.3048;
// console.log(feetToMeters(10));

const degToRad = (degrees) => degrees * (Math.PI / 180);
// console.log(degToRad(90));

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// console.log(isLeapYear(2024));

const rectangleArea = (length, width) => length * width;

const rectanglePerimeter = (width, height) => 2 * (width + height);

const trianglePerimeter = (side1, side2, side3) => side1 + side2 + side3;

const sphereVolume = (radius) => (4 / 3) * Math.PI * radius ** 3;

const cylinderVolume = (radius, height) => Math.PI * radius ** 2 * height;

const triangleArea = (base, height) => 0.5 * base * height;

const cubeVolume = (side) => side ** 3;

const trapezoidArea = (base1, base2, height) => 0.5 * (base1 + base2) * height;

const coneVolume = (radius, height) => (1 / 3) * Math.PI * radius ** 2 * height;

const cuboidVolume = (length, width, height) => length * width * height;

const circleSectorArea = (radius, angle) =>
  (angle / 360) * Math.PI * radius ** 2;

const regularPolygonArea = (sideLength, numOfSides) =>
  (numOfSides * sideLength ** 2) / (4 * Math.tan(Math.PI / numOfSides));

const ellipseArea = (a, b) => Math.PI * a * b;

const parallelogramArea = (base, height) => base * height;

const regularHexagonArea = (sideLength) =>
  (3 * Math.sqrt(3) * sideLength ** 2) / 2;

const circleCircumference = (radius) => 2 * Math.PI * radius;

const regularPolygonPerimeter = (sideLength, numSides) => sideLength * numSides;

const equilateralTriangleArea = (sideLength) =>
  (Math.sqrt(3) * sideLength ** 2) / 4;

const regularPentagonArea = (sideLength) =>
  (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * sideLength ** 2;

const pyramidVolume = (baseArea, height) => (1 / 3) * baseArea * height;

const cubeSurfaceArea = (sideLength) => 6 * sideLength ** 2;

const regularOctagonArea = (sideLength) =>
  2 * (1 + Math.sqrt(2)) * sideLength ** 2;

const ellipsoidVolume = (a, b, c) => (4 / 3) * Math.PI * a * b * c;

const areaOfKite = (d1, d2) => 0.5 * d1 * d2;

const sectorArea = (radius, angle) => (Math.PI * radius ** 2 * angle) / 360;

// Given the coordinates of two points (x1,y1) and (x2, y2),
// it uses the formula sqrt((x2 - x1)^2 + (y2 - y1)^2) to compute the distance between them.
const distanceBetweenPoints = (x1, y1, x2, y2) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distanceBetweenPoints(0, 0, 3, 4));

const calculateDistance = ([x1, y1], [x2, y2]) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(calculateDistance([0, 0], [3, 4]));
