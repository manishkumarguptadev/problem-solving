var getHint = function (secret, guess) {
  const secretDigitCount = Array(10).fill(0);
  const guessDigitCount = Array(10).fill(0);

  let bulls = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secretDigitCount[+secret[i]]++;
      guessDigitCount[+guess[i]]++;
    }
  }

  let cows = 0;

  for (let digit = 0; digit < 10; digit++) {
    cows += Math.min(secretDigitCount[digit], guessDigitCount[digit]);
  }

  return `${bulls}A${cows}B`;
};
