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
  var results = [];
  
  for (var i = 0; i < 200; i++) {
    if (divideByAll(i, dividers)) {
      results.push(i);
    }
  }
  
  // return the last in the array
  // arr.slice(-1)[0] 
  return results;
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

