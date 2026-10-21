var canFinish = function (numCourses, prerequisites) {
  // Construct a graph with adjacency list
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  const visited = [];
  const stack = [];

  const hasCycle = (u) => {
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

    // Backtracking
    stack[u] = false;

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;
};

var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const visited = new Array(numCourses).fill(false);

  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  const dfs = (course) => {
    if (visited[course]) return false;
    if (graph[course].length === 0) return true;

    visited[course] = true;

    for (const prereq of graph[course]) {
      if (!dfs(prereq)) {
        return false;
      }
    }

    visited[course] = false;
    graph[course] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;
};
