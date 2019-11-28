var jKstra = require('./jKstra');

var graph = new jKstra.Graph();

var n = []; // to easily keep references to the node objects

n.push(graph.addVertex(0));
n.push(graph.addVertex(1));
n.push(graph.addVertex(2));
n.push(graph.addVertex(3));
n.push(graph.addVertex(4)); // the parameter is arbitrary data assigned to the node
n.push(graph.addVertex({id: 666, label: 'A node holding complex data'}));

console.log(n[3].data); // => 3
console.log(n[5].data); // => {id: 666, label: 'A node holding complex data'}

graph.addEdge(n[0], n[1], 7);   // The edges are directed. Here, only the edge from 0 to 1 is created.
graph.addEdgePair(n[0], n[2], 9);   // But two opposite edges sharing the same data can be easily created
graph.addEdge(n[0], n[5], 14);
graph.addEdge(n[1], n[2], 10);
graph.addEdge(n[1], n[3], 15);
graph.addEdge(n[2], n[5], 2);
graph.addEdge(n[2], n[3], 12);  // As for the nodes, you can assign any data to the edge.
graph.addEdge(n[3], n[4], 6);   // Here we use it to store a single value which will be used as a cost.
graph.addEdge(n[5], n[4], 10);

// you can access edges from nodes with the outEdges/inEdges function
console.log(graph.outEdges(n[5]).map(function(e) { return e.data; }).join());
// => [10]

var dijkstra = new jKstra.algos.Dijkstra(graph);

// computes the shortestPath between nodes 0 and 4,
// using the single number stored in each as its cost
var path = dijkstra.shortestPath(n[0], n[4], {
    edgeCost: function(e) { return e.data; }
});

// the result is an array of the edge objects that make the path
console.log(path.map(function(e) { return e.data; }).join());
// => [9, 2, 10]