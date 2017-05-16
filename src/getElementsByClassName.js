// // If life was easy, we could just do things the easy way:
// // var getElementsByClassName = function (className) {
// //   return document.getElementsByClassName(className);
// // };

// // But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   var output = [];
//   // if ( className = document.body )
//   var location = document.body;
//   nodes.forEach(function (element) {
//     output.push(element.childNodes);
//   });
//   console.log(output);
// };
// // use document.body
// // use element.childNodes;
// // use element.classList;


const getElementsByClassName = function(className, node) {
  let nodes = [];

  node = node || document.body;

  //split classList if multiple
  const parts = node.classList.value.split(' ');
  if (parts.indexOf(className) >= 0) {
    nodes.push(node);
  }
  
  // iterate through children and recurse through descendants
  for ( let i = 0; i < node.children.length; i++) {
    // store results of current parent-child 'branch'?
    const results = getElementsByClassName(className, node.children[i]);
    // change nodes to concat existing node with results
    nodes = nodes.concat(results);
  }
  return nodes;
};