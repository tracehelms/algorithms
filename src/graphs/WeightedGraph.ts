/*
 * Weighted, Directional Graphs
 *
 * See `src/graphs/Graph.ts` and read that comment first. This implementation
 * is for a weighted, directional graph.
 *
 * A directional graph is one where the relationships aren't mutual. For
 * instance, Alice could follow Bob, but Bob doesn't have to follow Alice. Or
 * you could fly from Orlando to Denver, but maybe there's not flight from
 * Denver to Orlando.
 *
 * A weighted graph is one in which the edges have a weight, or a cost, to them.
 * This could represent how much a flight from one city (vertex) to another
 * costs, or how long it takes to drive from one city vs. another.
 *
 * This implements Dijkstra`s algorithm for finding the shortest path between
 * two vertices. It takes into account the weight of each edge and finds the
 * path with the lowest weight. The efficiency of Dijkstra's algorithm is
 * O(V^2) in the worst case. The worst case is when every vertex is adjacent to
 * every other vertex.
 *
 */
class WeightedGraph<T> {
  vertices: Array<Vertex<T>>;

  constructor() {
    this.vertices = [];
  }

  addVertex(value: T): Vertex<T> {
    const vertex = new Vertex(value);
    this.vertices.push(vertex);
    return vertex;
  }

  /*
   * This shortest path algorithm uses Dijkstra's Algorithm
   */
  shortestPath(
    startingVertex: Vertex<T>,
    finalVertex: Vertex<T>
  ): ShortestPath<T> {
    const lowestCosts: Map<T, number> = new Map();
    const lowestPreviousVertex: Map<T, T> = new Map();
    let unvisitedVertices: Array<Vertex<T>> = []; // TODO build and use a Queue
    const visitedVertices: Map<T, true> = new Map();

    lowestCosts.set(startingVertex.value, 0);

    let currentVertex: Vertex<T> | undefined = startingVertex;

    while (!!currentVertex) {
      visitedVertices.set(currentVertex.value, true);
      unvisitedVertices = unvisitedVertices.filter(
        (v) => v.value !== currentVertex?.value
      );

      for (const [neighbor, weight] of currentVertex.neighbors.entries()) {
        if (!visitedVertices.has(neighbor.value)) {
          unvisitedVertices.push(neighbor);
        }

        const costThroughCurrentVertex =
          (lowestCosts.get(currentVertex.value) || 0) + weight;
        const currentLowestCost = lowestCosts.get(neighbor.value);

        if (
          typeof currentLowestCost === "undefined" ||
          costThroughCurrentVertex < currentLowestCost
        ) {
          lowestCosts.set(neighbor.value, costThroughCurrentVertex);
          lowestPreviousVertex.set(neighbor.value, currentVertex.value);
        }
      }

      currentVertex = unvisitedVertices
        .sort((a, b) => {
          return (
            (lowestCosts.get(a.value) || 0) - (lowestCosts.get(b.value) || 0)
          );
        })
        .at(0);
    }

    const shortestPath: ShortestPath<T> = {
      path: [],
      weight: lowestCosts.get(finalVertex.value) || -1,
    };

    let currentVertexValue: T | undefined = finalVertex.value;

    while (
      typeof currentVertexValue !== "undefined" &&
      currentVertexValue !== startingVertex.value
    ) {
      shortestPath.path = [currentVertexValue, ...shortestPath.path];
      currentVertexValue = lowestPreviousVertex.get(currentVertexValue);
    }

    shortestPath.path = [startingVertex.value, ...shortestPath.path];

    return shortestPath;
  }
}

export type ShortestPath<T> = {
  path: Array<T>;
  weight: number;
};

class Vertex<T> {
  value: T;
  neighbors: Map<Vertex<T>, number>;

  constructor(value: T) {
    this.value = value;
    this.neighbors = new Map();
  }

  addEdgeTo(vertex: Vertex<T>, weight: number = 1) {
    if (this.neighbors.has(vertex)) {
      return;
    }
    this.neighbors.set(vertex, weight);
  }
}

export { Vertex, WeightedGraph as default };
