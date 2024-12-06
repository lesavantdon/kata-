function oddOrEven(array) {
  const sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);  // Sum all elements in the array

  return sum % 2 === 0 ? 'even' : 'odd';  // Check if the sum is even or odd
}
