// function firstCapital(str: string) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//       console.log(str.charAt(i));
//       break;
//     }
//   }
// }

// function firstCapital(str: string) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//       console.log(str.charAt(i));
//       break;
//     }
//   }
// }

function firstCapital(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (/^[A-Z]/.test(str[i])) {
      console.log(str[i]);
      break;
    }
  }
}

firstCapital("FLo");
