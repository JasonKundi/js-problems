const repeatStr = (str) => {
    
  const splitStr = str.split("").forEach(function (letter) {
    let doubleLetter = letter.repeat(2);
    let result = doubleLetter;
    return result
  })

};

console.log(repeatStr("string"));
