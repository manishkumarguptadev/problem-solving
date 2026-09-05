function maximumValue(strs) {
  const getStringValue = (str) => {
    const numericValue = Number(str);

    return Number.isNaN(numericValue) ? str.length : numericValue;
  };

  const values = strs.map(getStringValue);
  return Math.max(...values);
}
