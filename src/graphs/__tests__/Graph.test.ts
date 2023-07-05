import Graph from "../Graph";

describe("Graph", () => {
  test("it can be created", () => {
    const graph: Graph<string> = new Graph();
    expect(graph).not.toBeUndefined();
  });

  test("it can add vertices", () => {
    const graph: Graph<string> = new Graph();

    graph.addVertex("Alice");
    graph.addVertex("Bob");
    graph.addVertex("Candy");

    expect(graph.vertices.length).toBe(3);
  });

  test("it can store relationships", () => {
    const graph: Graph<string> = new Graph();

    const alice = graph.addVertex("Alice");
    const bob = graph.addVertex("Bob");
    const candy = graph.addVertex("Candy");

    graph.addEdge(alice, bob);
    graph.addEdge(bob, candy);

    expect(alice.neighbors).toContain(bob);
    expect(bob.neighbors).toContain(alice);
    expect(bob.neighbors).toContain(candy);
    expect(candy.neighbors).toContain(bob);
  });

  test("it can perform a depth first search (DFS)", () => {
    const graph: Graph<string> = new Graph();

    const alice = graph.addVertex("Alice");
    const bob = graph.addVertex("Bob");
    const candy = graph.addVertex("Candy");
    const derek = graph.addVertex("Derek");
    const elaine = graph.addVertex("Elaine");
    const fred = graph.addVertex("Fred");
    const gina = graph.addVertex("Gina");
    const helen = graph.addVertex("Helen");
    const irena = graph.addVertex("Irena");

    graph.addEdge(alice, bob);
    graph.addEdge(alice, candy);
    graph.addEdge(alice, derek);
    graph.addEdge(alice, elaine);
    graph.addEdge(bob, fred);
    graph.addEdge(fred, helen);
    graph.addEdge(candy, helen);
    graph.addEdge(derek, gina);
    graph.addEdge(derek, elaine);
    graph.addEdge(gina, irena);

    const result = graph.dfs(alice, "Irena");
    expect(result).toBeTruthy();
    expect(result?.value).toBe("Irena");
  });

  test("it can perform a breadth first search (BFS)", () => {
    const graph: Graph<string> = new Graph();

    const alice = graph.addVertex("Alice");
    const bob = graph.addVertex("Bob");
    const candy = graph.addVertex("Candy");
    const derek = graph.addVertex("Derek");
    const elaine = graph.addVertex("Elaine");
    const fred = graph.addVertex("Fred");
    const gina = graph.addVertex("Gina");
    const helen = graph.addVertex("Helen");
    const irena = graph.addVertex("Irena");

    graph.addEdge(alice, bob);
    graph.addEdge(alice, candy);
    graph.addEdge(alice, derek);
    graph.addEdge(alice, elaine);
    graph.addEdge(bob, fred);
    graph.addEdge(fred, helen);
    graph.addEdge(candy, helen);
    graph.addEdge(derek, gina);
    graph.addEdge(derek, elaine);
    graph.addEdge(gina, irena);

    const result = graph.bfs(alice, "Irena");
    expect(result).toBeTruthy();
    expect(result?.value).toBe("Irena");
  });
});
