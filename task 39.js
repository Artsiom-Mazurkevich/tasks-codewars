function maskify(cc) {
    let arr = cc.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 4) {
            arr[i] = '#'
        }
    }
    return arr.join('')
}

console.log(maskify('4556364607935616'))