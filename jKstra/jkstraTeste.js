var jKstra = require('./jKstra');

var graph = new jKstra.Graph();

var n = []; 

n.push(graph.addVertex(0));
n.push(graph.addVertex(1));
n.push(graph.addVertex(2));
n.push(graph.addVertex(3));
n.push(graph.addVertex(4)); 
n.push(graph.addVertex({id: 666, label: 'teste de nome'}));

console.log(n[3].data); 
console.log(n[5].data); 

graph.addEdge(n[0], n[1], 7);
graph.addEdgePair(n[0], n[2], 9);
graph.addEdge(n[0], n[5], 14);
graph.addEdge(n[1], n[2], 10);
graph.addEdge(n[1], n[3], 15);
graph.addEdge(n[2], n[5], 2);
graph.addEdge(n[2], n[3], 12);
graph.addEdge(n[3], n[4], 6);
graph.addEdge(n[5], n[4], 10);

var dijkstra = new jKstra.algos.Dijkstra(graph);

var path = dijkstra.shortestPath(n[0], n[4], {
    edgeCost: function(e) { return e.data; }
});

console.log(path.map(function(e) { return e.data; }).join());
// => [9, 2, 10]