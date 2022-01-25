 // Examples:
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"


function accum(s) {
    let str = ''
      for (let i = 0; i < s.length; i++) {
      str += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-'
    }
    return str.slice(0, str.length - 1)
  }


  console.log (accum('MjtkuBovqrU'))