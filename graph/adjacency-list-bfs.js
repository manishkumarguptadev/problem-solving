const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traversalBFS = function (graph, start) {
  const queue = [];
  const result = [];
  const seen = {};

  queue.push(start);
  seen[start] = true;
  result.push(start);

  while (queue.length) {
    const currentVertex = queue.shift();
    const connections = graph[currentVertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
        seen[connection] = true;
        result.push(connection);
      }
    }
  }

  return result;
};

const result = traversalBFS(adjacencyList, 5);

console.log(result);
