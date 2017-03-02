

// Notice we're accepting two values, the list and the current total
function totalForArray(currentTotal, arr) {
  
  currentTotal += arr[0]; // JAMIE: Why is this not arr[0].length?

  // Note to experienced JavaScript programmers, I'm not using Array.shift on 
  // purpose because we're treating arrays as if they are immutable.
  var remainingList = arr.slice(1); //  JAMIE: Look into .slice

  // This function calls itself with the remainder of the list, and the 
  // current value of the currentTotal variable
  if(remainingList.length > 0) {
    return totalForArray(currentTotal, remainingList); 
  }
  
  // Unless of course the list is empty, in which case we can just return
  // the currentTotal value.
  else {
    return currentTotal;
  }
}