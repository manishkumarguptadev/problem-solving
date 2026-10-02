// Create a function that will iterate over every property in an object.
//  It should include children objects. For this version display the property and value to the console.

const isObject = function (val) {
  return typeof val === "object" && val !== null;
};

const iterate = function (obj) {
  for (let key in obj) {
    if (isObject(obj[key])) {
      iterate(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  }
};

// Enhance the objProps function to accept a function that will be applied to every property.
// Create a function that can be passed into objProps that will check property values for strings that are actually numbers.
// If so convert the value to a number.

const convertToNum = function (obj, key) {
  if (!isNaN(obj[key])) obj[key] = Number(obj[key]);
};

const iterateModify = function (obj, fn) {
  for (let key in obj) {
    if (isObject(obj[key])) {
      iterateModify(obj[key], fn);
    } else {
      if (typeof fn === "function") fn(obj, key);
    }
  }
};

var user = {
  firstName: "John",
  lastName: "Doe",
  email: "sdoe@allthingsjavascript.com",
  type: {
    type1: "admin",
    type2: "user",
  },
  active: "true",
  address: {
    street: {
      street1: "100 N. Main",
      street2: "Apt. 5",
    },
    city: "Lehi",
    zip: "10001",
  },
  age: "31",
  scores: ["100", 50, 60, "70", 25, 45, "90", 85],
};
iterateModify(user, convertToNum);
console.log(user);
