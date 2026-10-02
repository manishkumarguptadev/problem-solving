var repeatedSubstringPattern = function (s) {
  const doubledString = s + s;

  const slicedString = doubledString.slice(1, s.length * 2 - 1);

  return slicedString.includes(s);
};
