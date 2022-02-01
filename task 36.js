    //   Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    //   Return your answer as a number.






       function sumMix(x){
      return x.join().split(',').map(s => parseInt(s)).reduce((sum, current) => sum + current);
    }

    console.log (sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));