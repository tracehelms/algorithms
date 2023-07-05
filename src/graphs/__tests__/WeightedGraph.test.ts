import WeightedGraph from "../WeightedGraph";

describe("WeightedGraph", () => {
  test("it can be created", () => {
    const graph: WeightedGraph<string> = new WeightedGraph();
    expect(graph).not.toBeUndefined();
  });

  test("it can add vertices", () => {
    const graph: WeightedGraph<string> = new WeightedGraph();

    graph.addVertex("Denver");
    graph.addVertex("El Paso");
    graph.addVertex("Boston");

    expect(graph.vertices.length).toBe(3);
  });

  test("it can store relationships", () => {
    const graph: WeightedGraph<string> = new WeightedGraph();

    const denver = graph.addVertex("Denver");
    const elPaso = graph.addVertex("El Paso");
    const chicago = graph.addVertex("Chicago");
    const boston = graph.addVertex("Boston");

    denver.addEdgeTo(elPaso, 140);
    denver.addEdgeTo(chicago, 40);
    boston.addEdgeTo(denver, 180);

    expect(denver.neighbors.get(elPaso)).toBe(140);
    expect(denver.neighbors.get(chicago)).toBe(40);
    expect(boston.neighbors.get(denver)).toBe(180);
  });

  test("it can find the shortest path", () => {
    const graph: WeightedGraph<string> = new WeightedGraph();

    const denver = graph.addVertex("Denver");
    const elPaso = graph.addVertex("El Paso");
    const chicago = graph.addVertex("Chicago");
    const boston = graph.addVertex("Boston");
    const orlando = graph.addVertex("Orlando");

    denver.addEdgeTo(elPaso, 140);
    denver.addEdgeTo(chicago, 40);
    elPaso.addEdgeTo(boston, 100);
    chicago.addEdgeTo(elPaso, 80);
    boston.addEdgeTo(denver, 180);
    boston.addEdgeTo(chicago, 120);
    orlando.addEdgeTo(boston, 100);
    orlando.addEdgeTo(denver, 160);

    const shortestPath = graph.shortestPath(orlando, elPaso);
    expect(shortestPath.weight).toBe(280);
    expect(shortestPath.path).toStrictEqual([
      "Orlando",
      "Denver",
      "Chicago",
      "El Paso",
    ]);
  });
});
