const arrayOfMultiples = (number, multiples) => {
  let multiplesArray = []
    //todo
    // first number is the multiple i.e 7
    // second number is the amount of multiples of first number
    // shown in the array
    //in the example (7,5) display [7, 14, 21, 28, 35]

    // if the first number is 7, I wanna see multiples of 7
    // if the second number is 5, i wanna see 5 multiples of first number i.e 7

  for(let i = number; i <= number * multiples; i += number ) {
    // number * multiples 
    multiplesArray.push(i)
  }
    return multiplesArray
}

const result = arrayOfMultiples(7, 5)

console.log(result)



