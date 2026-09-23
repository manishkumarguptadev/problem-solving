var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  for (let c of moves) {
    if (c === "U") y++;
    else if (c === "D") y--;
    else if (c === "R") x++;
    else if (c === "L") x--;
  }

  return x === 0 && y === 0;
};
