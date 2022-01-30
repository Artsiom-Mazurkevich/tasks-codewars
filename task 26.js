// strictEqual(findUniq([ 1, 0, 0 ]), 1);
// strictEqual(findUniq([ 0, 1, 0 ]), 1);
// strictEqual(findUniq([ 0, 0, 1 ]), 1);
// strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);



function findUniq(arr) {
    let artem = Array.from(new Set(arr));
    let one = [];
    let two = [];
    for (i =  0 ; i < arr.length; i++) {
        if (arr[i] == artem[0]) {
            one.push(artem[0])
        }
        else if (arr[i] == artem[1]) {
            two.push(artem[1])
        }
    }
    if (one.length > two.length) {
        return two[0]
    }
    else { return one[0]}
}


console.log(findUniq([ 3, 10, 3, 3, 3 ]));