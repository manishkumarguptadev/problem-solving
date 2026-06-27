var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); //descending order

    let stone1 = stones[0]; //heaviest stone after sorting
    let stone2 = stones[1]; //2nd heiviest

    stones.splice(0, 2); //remove elements of index 0,1

    if (stone1 > stone2) {
      stones.push(stone1 - stone2);
    }
    //if equal do not push in stones mean destroyed
  }

  return stones.length ? stones[0] : 0;
};

var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();

  for (stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    let first = maxHeap.dequeue();
    let second = maxHeap.dequeue();
    if (first !== second) {
      maxHeap.enqueue(first - second);
    }
  }

  return maxHeap.size() === 0 ? 0 : maxHeap.front();
};
