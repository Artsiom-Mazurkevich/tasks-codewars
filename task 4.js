function findNextSquare(sq) {
    let x = Math.sqrt(sq)
    if (Number.isInteger(x)){
      x++
      return Math.pow(x, 2)
    }

    return -1;
  }

  console.log (findNextSquare (625))