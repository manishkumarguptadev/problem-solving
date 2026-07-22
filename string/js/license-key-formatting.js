var licenseKeyFormatting = function (s, k) {
  let key = "";
  reverse = [...s].reverse().join("");

  for (let c of reverse) {
    if (c !== "-") {
      if (key.length % (k + 1) === k) {
        key += "-";
      }
      key += c.toUpperCase();
    }
  }

  return [...key].reverse().join("");
};
