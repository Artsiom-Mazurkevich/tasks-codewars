function vaporcode(string) {
    let newStr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            newStr.push(string[i].toUpperCase())
        }
    };
    return newStr.join('  ')
}

vaporcode('Lets go to the movies')


// function vaporcode(string) {
//     return string.toUpperCase().split(" ").join("").split("").join("  ");
// }

