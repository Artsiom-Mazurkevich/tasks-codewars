function getCount(str) {
    var vowelsCount = 0;
    let arr = [];
    for (let c of str) {
      if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        arr.push(c)
      }
      vowelsCount = arr.length
    }
    return arr.length ;
  }
  console.log (getCount("abracadabrae"))