



function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return "The sum of all numbers is " + sum;
}

console.log(sumOfNumbers(100));

