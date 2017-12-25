function smallestCommons(arr) {
  // sort in order 
  var sortedArray = arr.sort();
  
  // need to make a dividers array
  var dividers = [];
  
  // so the first one will be lower 
  for (var lower = sortedArray[0]; lower <= sortedArray[1]; lower++) {
    dividers.push(lower);
  }
  
  return dividers;
  
  }
