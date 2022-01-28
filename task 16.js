      //Example
//Test.assertEquals(feast("great blue heron", "garlic naan"), true)
//Test.assertEquals(feast("chickadee", "chocolate cake"), true)
//Test.assertEquals(feast("brown bear", "bear claw"), false) */






 function feast(beast, dish) {
  let b = beast.split('');
  let d = dish.split('');
  return b[0] === d[0] && b[b.length - 1] === d[d.length - 1] ? true : false;
}

console.log(feast("brown bear", "bear claw"))