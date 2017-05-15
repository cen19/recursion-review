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


var getElementsByClassName = function(className) {
  var nodes = [];
  
  var searchNodes = function(node) {
    // take into account classNames with multiple  names
    var parts = node.classList.value.split(' ');
    // parts is an array
    // names are split into an array now
      // need to access and see if they exist
    if (parts.indexOf(className) >= 0) {
      // if it exists, push the entire node, not just the part
      nodes.push(node);
    }


    // now iterate through children and recursion
    for (var i = 0; i < node.children.length; i++) {
      searchNodes(node.children[i]);
      // when it reaches recursion, it will keep looking for the children and children's children
    }
  };

  // call the first ever searchNodes on the more 'parent' node
  searchNodes(document.body);
  return nodes;

};