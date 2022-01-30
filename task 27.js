function countSheeps(arrayOfSheep) {
    let count = 0;
  let ar = arrayOfSheep.join().split(',');
  for (let item of ar) {
      if (item === 'true') {
          count++
      }
  }
  return count

}

console.log (countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))