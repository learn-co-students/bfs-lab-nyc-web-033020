function bfs(startingNode, vertices, edges){
    startingNode.distance = 0
    let discovered = [startingNode]
    let discoverOrder = [startingNode]
    while(discovered.length != 0){
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
  }
// Look at first node, find adjacent nodes, mark distance/predecessor, 


function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
      return edge.includes(nodeName)
    }).map(function(edge){
      return edge.filter(function(node){
        return (node != nodeName)
      })[0]
    }).map(function(name){
      return findNode(name, vertices)
    }).filter(function(node){
      return node.distance == null;
    })
  }

function findNode(nodeName, vertices){
    return vertices.find((vertex)=> vertex.name == nodeName)
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
adjacentNodes.map((node)=>{
    node.distance = predecessor.distance + 1
    node.predecessor = predecessor
})
}

// This is my original non-working solution before I checked against the official solution. I'm fairly certain that the test relies on you defining markDistanceAndPredecessor first, 
// which makes this exercise bizarrely recursive.
// function findAdjacent(name, vertices, edges){
//     console.log("Target Station", name)
//     let adjacentVertexNames = []
//     // for(let i = 0; i<edges.length; i++){
//     //     // console.log(edges[i])
//     //     if(edges[i][0]==name){
//     //         adjacentVertexNames.push(edges[i][1])
//     //     } else if (edges[i][1]==name){
//     //         adjacentVertexNames.push(edges[i][0])
//     //     }
//     // }
//     adjacentVertexNames = edges.filter((edge) =>{
//         return edge.includes(name)
//     }).filter((edge)=> edge[0]!= name)

//     let adjacentVertices = adjacentVertexNames.map((name) =>{
//         return findNode(name, vertices)
//     })

//     return adjacentVertices
// }