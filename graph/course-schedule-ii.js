var findOrder = function (numCourses, prerequisites) {
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach((p) => {
    const u = p[0];
    const v = p[1];
    adjList[u].push(v);
  });

  const visited = [];
  const stack = [];
  const result = [];

  const hasCycle = (u) => {
    // checked already?
    if (visited[u]) {
      return false;
    }

    visited[u] = true;
    stack[u] = true;

    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    stack[u] = false;

    // The key of topological sorting is to add the node
    // to the result once all its neighbors are visited
    result.push(u);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return [];
    }
  }

  return result;
};

var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const visited = new Array(numCourses).fill(false);
  const cycle = new Array(numCourses).fill(false); // to detect cycles
  const result = [];

  // Step 1: we build adjacency list
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course); // reverse edge for post-order
  }

  // Step 2: DFS with cycle detection
  const dfs = (course) => {
    if (cycle[course]) return false; // cycle detected
    if (visited[course]) return true; // already processed

    cycle[course] = true;

    for (const neighbor of graph[course]) {
      if (!dfs(neighbor)) return false;
    }

    cycle[course] = false;
    visited[course] = true;
    result.push(course); // post-order insert
    return true;
  };

  // Step 3: we run DFS for all courses
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result.reverse(); // we reverse to get correct order
};
