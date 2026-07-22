var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      stack.push(char - "0");
    } else if (char === "[") {
      continue;
    } else if (char === "]") {
      let segment = "";
      while (typeof stack[stack.length - 1] !== "number") {
        const popped = stack.pop();
        segment = popped + segment;
      }
      let num = 0;
      let exp = 0;
      while (typeof stack[stack.length - 1] === "number") {
        num = num + stack.pop() * 10 ** exp;
        exp++;
      }
      stack.push(segment.repeat(num));
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
const decodeString = (s) => {
  const helper = () => {
    let num = 0;
    let word = "";

    for (++index; index < s.length; index++) {
      let ch = s[index];

      if (ch === "[") {
        word += helper().repeat(num);
        num = 0;
      } else if (ch === "]") {
        break;
      } else if (ch >= "0" && ch <= "9") {
        num = num * 10 + (ch - "0");
      } else {
        word += ch;
      }
    }

    return word;
  };

  let index = -1;
  return helper();
};
console.log(decodeString("100[leetcode]"));
