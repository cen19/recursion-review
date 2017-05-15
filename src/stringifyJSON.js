// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    var output = [];
    if (obj[0] === undefined) {
      return '[]';
    } else {
      obj.forEach(function (element) {
        output.push(stringifyJSON(element));
      });
    }

    return '[' + output.join(',') + ']';    
  }
  
  if (typeof obj === 'object' && obj) {
    var output = [];
    for (var key in obj) {
      if ( typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else {
        output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }

    return '{' + output.join(',') + '}';
  }



  return '' + obj;

};

