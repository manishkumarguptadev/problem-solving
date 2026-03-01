"use strict";
function firstCapital(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      return str.charAt(i);
    }
  }
}
function firstCapital(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      return str.charAt(i);
    }
  }
}
function firstCapital(str) {
  for (let i = 0; i < str.length; i++) {
    if (/^[A-Z]/.test(str[i])) {
      return str[i];
    }
  }
}
console.log(firstCapital("FLo"));
