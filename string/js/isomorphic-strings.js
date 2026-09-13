function isIsomorphic(string1, string2) {
  if (string1.length !== string2.length) return false;
  let mapStr1toStr2 = {};
  let mapStr2toStr1 = {};
  for (let i = 0; i < string1.length; i++) {
    let char1 = string1[i];
    let char2 = string2[i];
    if (mapStr1toStr2[char1] && mapStr1toStr2[char1] !== char2) {
      return false;
    }
    if (mapStr2toStr1[char2] && mapStr2toStr1[char2] !== char1) {
      return false;
    }
    mapStr1toStr2[char1] = char2;
    mapStr2toStr1[char2] = char1;
  }
  return true;
}
console.log(isIsomorphic("all", "egg"));
