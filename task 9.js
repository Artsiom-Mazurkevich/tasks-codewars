//Examples
//-1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
//25  =>  true
//26  =>  false



let isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
      return true
    }
    return false
  }

  console.log (isSquare(25))