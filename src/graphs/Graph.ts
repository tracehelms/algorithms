/*
 * Graphs (bidirectional, unweighted)
 *
 * Graphs are data structures that are good at modeling relationships between
 * things. Things like social networks, family trees, and representing cities
 * you can travel between on an airline, for instance.
 *
 * Objects in a graph are called "vertices" instead of nodes and connecting
 * lines are called "edges." Vertices connected by an edge are "adjacent" to
 * each other, or they're called neighbors.
 *
 * Graphs are similar to trees, but trees are more restrictive. All trees are
 * graphs, but not all graphs are trees. For a graph to be a tree, it must be
 * connected and cannot have cycles. Connected means all vertices have to be
 * connected to the rest of the graph. Cycles are when multiple vertices have
 * a circular relationship, like A -> B -> C -> A.
 *
 * So graphs can have cycles and vertices that don't connect to anything else.
 *
 * This is a graph implementation where relationships goes both ways. If if
 * were a social network for instance, if Alice follows Bob, Bob would also
 * follow Alice.
 *
 * Searching efficiency is O(V+E), where V is the number of vertices and E is
 * the number of edges in the graph. Searching the entire graph is the
 * worst-case performance scenario. Efficiency gets better if the search value
 * can be found early.
 *
 */
class Graph<T> {
  vertices: Array<Vertex<T>>;

  constructor() {
    this.vertices = [];
  }

  addVertex(value: T): Vertex<T> {
    const vertex = new Vertex(value);
    this.vertices.push(vertex);
    return vertex;
  }

  addEdge(vertex1: Vertex<T>, vertex2: Vertex<T>) {
    vertex1.addNeighbor(vertex2); // The inverse is added in Vertex.addNeighbor
  }

  /* Depth First Search gets as far away as possible from the starting vertex
   * when it starts. It picks a neighbor and goes deep into the graph first
   * and then comes back up to start again with another neighbor.
   *
   * It will be more efficient if you're searching for something that you know
   * should be far away from the starting vertex.
   */
  dfs(
    vertex: Vertex<T>,
    searchValue: T,
    visitedVertices: Map<T, boolean> = new Map()
  ): Vertex<T> | undefined {
    if (vertex.value === searchValue) {
      return vertex;
    }

    visitedVertices.set(vertex.value, true);

    for (let i = 0; i < vertex.neighbors.length; i++) {
      const neighbor = vertex.neighbors[i];
      if (visitedVertices.has(neighbor.value)) {
        continue;
      }

      if (neighbor.value === searchValue) {
        return neighbor;
      }

      const searchingFor = this.dfs(neighbor, searchValue, visitedVertices);
      if (searchingFor) {
        return searchingFor;
      }
    }
  }

  /* Breadth First Search stays near the starting vertex and fans out from
   * there. It searches all of the starting vertex's neighbors, then those
   * neighbors' neighbors, and so on.
   *
   * It will be more efficient if you're searching for something close to
   * the starting vertex. Like a person's immediate friends or friends of
   * their friends.
   */
  bfs(startingVertex: Vertex<T>, searchValue: T): Vertex<T> | undefined {
    const queue: Array<Vertex<T>> = []; // TODO implement and use a queue
    const visitedVertices: Map<T, boolean> = new Map();

    visitedVertices.set(startingVertex.value, true);
    queue.push(startingVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (!currentVertex) {
        return;
      }

      if (currentVertex.value === searchValue) {
        return currentVertex;
      }

      for (let i = 0; i < currentVertex.neighbors.length; i++) {
        const neighbor = currentVertex.neighbors[i];

        if (neighbor.value === searchValue) {
          return neighbor;
        }

        if (!visitedVertices.has(neighbor.value)) {
          visitedVertices.set(neighbor.value, true);
          queue.push(neighbor);
        }
      }
    }
  }
}

class Vertex<T> {
  value: T;
  neighbors: Array<Vertex<T>>;

  constructor(value: T) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(vertex: Vertex<T>) {
    if (this.neighbors.includes(vertex)) {
      return;
    }

    this.neighbors.push(vertex);
    vertex.addNeighbor(this);
  }
}

export { Vertex, Graph as default };
