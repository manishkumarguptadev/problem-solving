var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let totalGas = 0;
  let currentGas = 0;

  for (let i = 0; i < gas.length; i++) {
    const fuelGain = gas[i] - cost[i];
    totalGas += fuelGain;
    currentGas += fuelGain;

    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return totalGas < 0 ? -1 : start;
};
var canCompleteCircuit = function (gas, cost) {
  if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
    return -1;
  }

  let currentGas = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
};
