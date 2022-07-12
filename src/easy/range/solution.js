// Given a list of numbers, find the difference between the highest and lowest numbers in the list.
// pass in array of numbers,
// Loop through array and check for highest and lowest numbers
//  While loop?
// Store high and low, calculate difference by subtracting low from high number
// return result

let array = [5, 8, 2, 3, 6, 9];

const range = (array) => {
  console.log(array);
  let min = array[0];
  let max = array[0];
  for(let i = 1; i < array.length; i++) {
    if(array[i] > min)
    min = array[i]
    if(array[i] < max)
    max = array[i]
  }
  return "Max number is; " + max + " Min number is; " + min
};



const answer = range(array)
console.log(answer)