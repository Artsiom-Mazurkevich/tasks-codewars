function toJadenCase (str) {
    return str.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }


  console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))