import Heap from "../../common/heap.js";

function distanceFromOrigin(p) {
  // ignoring sqrt to calculate the distance
  return p[0] * p[0] + p[1] * p[1];
}

var kClosest = function (points, k) {
  const maxHeap = new Heap({
    comparator: (a, b) => distanceFromOrigin(b) - distanceFromOrigin(a),
    initialValues: [],
  });
  // put first 'k' points in the max heap
  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  // go through the remaining points of the input array,
  // if a point is closer to the origin than the top point of the max-heap,
  // remove the top point from heap and add the point from the input array
  for (let i = k; i < points.length; i++) {
    if (distanceFromOrigin(points[i]) < distanceFromOrigin(maxHeap.peek())) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }

  // the heap has 'k' points closest to the origin, return them in a list
  return maxHeap.toArray();
};

const result = kClosest(
  [
    [1, 3],
    [3, 4],
    [2, -1],
  ],
  2
);
console.log("Here are the k points closest the origin: ");
result.forEach((p) => console.log(`[${p[0]}, ${p[1]}] `));
