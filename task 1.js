function invert(array) {
    let arr = []
    for (let i of array) {
      if (i >= 0) {
        arr.push(-i)
      }
      else {
        arr.push(i * (-1))
      }
    }
    return arr
  }

  console.log (invert ([5,2,3,-10,20]))