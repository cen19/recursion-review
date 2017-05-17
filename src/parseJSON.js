// debugger;
var changeElements = function(array) {
  for (var i = 0; i < array.length; i++) {
    // if (array[i] === '') {
    //   array.splice(i, 1);
    // }
    
    if (Number(array[i]) || (Number(array[i]) === 0) && array[i] === '0') {
      array[i] = Number(array[i]);
    } else if (array[i] === 'true') {
      array[i] = true;
    } else if (array[i] === 'false') {
      array[i] = false;
    } else if (array[i] === 'null') {
      array[i] = null;
    } else if (array[i] === '') {
      array.splice(i, 1);
    } else {
      array[i] = array[i].slice(1, array[i].length - 1);
    }
  }
//     array.forEach(function (element) {
//       if (Number(element)) {
//           element = Number(element);
//       } else if (element === 'true') {
//           element = true;
//       } else {
//           element = element.slice(1, element.length - 1);
//       }
//     });

};

var parseJSON = function(json) {

//   if (json[0] === '[') {
    // if that first index of the string is the '[', the rest should be an array
  var arrayified = json.slice(1, json.length - 1).split(' ').join('').split(',');
     //debugger;
//     return arrayified.map(function (element) {
//       changeElements(element);
//     });
//   }
  changeElements(arrayified);
  return arrayified;
};



// var testArray = [true, 5, false];
// var stringTestArray = JSON.stringify(testArray);
// parseJSON(stringTestArray);

