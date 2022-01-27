 //For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
  let total = 0;
  numbers.forEach(element => {
    total += Math.pow(element, 2);           //
  });
  return total
}


console.log (squareSum([1,2]))