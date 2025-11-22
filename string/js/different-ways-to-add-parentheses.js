function diffWaysToCompute(expression) {
  const result = [];
  if (!isNaN(expression)) {
    result.push(parseInt(expression));
  }

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (isNaN(parseInt(char, 10))) {
      const l1 = diffWaysToCompute(expression.substring(0, i));
      const l2 = diffWaysToCompute(expression.substring(i + 1));

      for (let n1 of l1) {
        for (let n2 of l2) {
          if (char === "+") {
            result.push(n1 + n2);
          } else if (char === "-") {
            result.push(n1 - n2);
          } else if (char === "*") {
            result.push(n1 * n2);
          }
        }
      }
    }
  }

  return result;
}

function diffWaysToCompute(expression) {
  return diffWaysToCompute_rec({}, expression);
}

function diffWaysToCompute_rec(map, expression) {
  if (expression in map) {
    return map[expression];
  }

  const result = [];
  if (!isNaN(expression)) {
    result.push(parseInt(expression));
  }

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (isNaN(parseInt(char, 10))) {
      const l1 = diffWaysToCompute_rec(map, expression.substring(0, i));
      const l2 = diffWaysToCompute_rec(map, expression.substring(i + 1));
      for (let n1 of l1) {
        for (let n2 of l2) {
          if (char === "+") {
            result.push(n1 + n2);
          } else if (char === "-") {
            result.push(n1 - n2);
          } else if (char === "*") {
            result.push(n1 * n2);
          }
        }
      }
    }
  }

  map[expression] = result;
  return result;
}
