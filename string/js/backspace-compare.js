const string1 = "ab#z";
const string2 = "az#z";

const buildString = function (string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
};

var backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};

var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    // Find position of next possible char in s
    let backCount = 0;
    while (i >= 0) {
      if (s[i] === "#") {
        backCount++;
      } else if (backCount > 0) {
        backCount--;
      } else {
        break;
      }
      i--;
    }

    // Find position of next possible char in t
    backCount = 0;
    while (j >= 0) {
      if (t[j] === "#") {
        backCount++;
      } else if (backCount > 0) {
        backCount--;
      } else {
        break;
      }
      j--;
    }

    if (i < 0 && j < 0) {
      return true;
    }
    if (i < 0 || j < 0) {
      return false;
    }
    if (s[i] !== t[j]) {
      return false;
    }

    i--;
    j--;
  }

  return true;
};

console.log(backspaceCompare("nzp#o#g", "b#nzp#o#g"));
