class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
  let test = new SmallestIntegerFinder ();
  console.log (test.findSmallestInt([78,56,232,12,8]))