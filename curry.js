

// const sum = (f) => {
//     return (a) => (b) => f(a,b)
// }
//
// const retSum = (a,b) => a + b;
//
//
// console.log(sum(retSum)(5)(6));





const price = discount(500,0.10); // $50
// $500 - $50 = $450


function discount(discount) {
    return (price) => {
        return price * discount;
    }
}
const tenPercentDiscount = discount(0.5);
console.log(tenPercentDiscount(500));
console.log(tenPercentDiscount(400));









