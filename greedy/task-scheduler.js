import Heap from "../common/heap.js";
var leastInterval = function (tasks, n) {
  let taskFrequencyMap = {};
  tasks.forEach((chr) => {
    if (!(chr in taskFrequencyMap)) {
      taskFrequencyMap[chr] = 1;
    } else {
      taskFrequencyMap[chr]++;
    }
  });

  const maxHeap = new Heap({
    comparator: (a, b) => b[1] - a[1],
    initialValues: [],
  });

  // add all tasks to the max heap
  Object.keys(taskFrequencyMap).forEach((char) => {
    maxHeap.push([char, taskFrequencyMap[char]]);
  });

  let intervalCount = 0;
  while (maxHeap.size() > 0) {
    const waitList = [];

    // try to execute as many as 'n + 1' tasks from the max-heap
    let k = n + 1;
    while (k > 0 && maxHeap.size() > 0) {
      const [char, frequency] = maxHeap.pop();
      if (frequency > 1) {
        // decrement the frequency and add to the waitList
        waitList.push([char, frequency - 1]);
      }
      intervalCount++;
      k -= 1;
    }

    // put all the waiting list back on the heap
    waitList.forEach((task) => maxHeap.push(task));

    // we'll be having 'k' idle intervals for the next iteration
    if (maxHeap.size() > 0) {
      intervalCount += k;
    }
  }

  return intervalCount;
};
// var leastInterval = function (tasks, n) {
//   let taskFrequencyMap = {};
//   tasks.forEach((chr) => {
//     if (!(chr in taskFrequencyMap)) {
//       taskFrequencyMap[chr] = 1;
//     } else {
//       taskFrequencyMap[chr]++;
//     }
//   });

//   const maxHeap = new Heap({
//     comparator: (a, b) => b[1] - a[1],
//     initialValues: [],
//   });

//   // add all tasks to the max heap
//   Object.keys(taskFrequencyMap).forEach((char) => {
//     maxHeap.push([char, taskFrequencyMap[char]]);
//   });

//   let time = 0;
//   while (maxHeap.size() > 0) {
//     const waitList = [];
//     let cycle = n + 1;
//     let taskCount = 0;
//     while (cycle-- > 0 && maxHeap.size() > 0) {
//       const [char, frequency] = maxHeap.pop();
//       if (frequency > 1) {
//         // decrement the frequency and add to the waitList
//         waitList.push([char, frequency - 1]);
//       }
//       taskCount++;
//     }

//     // put all the waiting list back on the heap
//     waitList.forEach((task) => maxHeap.push(task));

//     // we'll be having 'n' idle intervals for the next iteration
//     time += maxHeap.size() === 0 ? taskCount : n + 1;
//   }

//   return time;
// };
console.log(
  `Minimum intervals needed to execute all tasks: ${leastInterval(
    ["a", "a", "a", "b", "c", "c"],
    2
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${leastInterval(
    ["a", "b", "a"],
    3
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${leastInterval(
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
    2
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${leastInterval(
    ["B", "C", "D", "A", "A", "A", "A", "G"],
    1
  )}`
);
