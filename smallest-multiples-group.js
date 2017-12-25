// 
function smallestCommons(arr) {
  // sort in order 
  var sortedArray = arr.sort();
  
  // need to make a dividers array
  var dividers = [];
  
  // so the first one will be lower 
  for (var lower = sortedArray[0]; lower <= sortedArray[1]; lower++) {
    dividers.push(lower);
  }
  
  // make the new results output array 
  var multiples = [];
  
  for (var i = 0; i < 200; i++) {
    if (divideByAll(i, dividers)) {
      multiples.push(i);
    }
  }
  
  // return the last in the array
  // arr.slice(-1)[0] 
  for (var i = 0; i < multiples.length; i++) {
    if (multiples[i] > 0 && multiples[i + 1] % multiples[i] == 0) {
      return multiples[i];
    }
  }

}

function divideByAll(i, dividers) {
  for (var dividersIndex = 0; dividersIndex < dividers.length; dividersIndex++) {
    if (i % dividers[dividersIndex] != 0) {
      return false;
    }
  }
  return true;
}


smallestCommons([1,5]);

