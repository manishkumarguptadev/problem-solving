function integerAddition(a, b) {
  while (b !== 0) {
    const result = a ^ b;
    const carry = (a & b) << 1;
    a = result;
    b = carry;
  }
  return a;
}

console.log(integerAddition(22, 6));
