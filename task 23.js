//strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");



 function sumTwoSmallestNumbers(numbers) {
    let ar1 = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            numbers.splice(i,1)
        }
    };
    ar1.push(Math.min(...numbers));
    let ar2 = numbers.filter(item => item > Math.min(...numbers));
    return ar1[0] + Math.min (...ar2)
};

console.log (sumTwoSmallestNumbers([19, 5, 42, 2, 77]));