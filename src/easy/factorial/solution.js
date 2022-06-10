// Find the product of all positive integers less than or equal to any given number. This is known as the _factorial_ (denoted by _!_):
// 
// `5! = 5 x 4 x 3 x 2 x 1 = 120`

const factorial = (num) => {
    let result = num
    if(num === 0 || num === 1)
    return 1;
    while(num>1){
        num--
        result*=num
    }
    return result
    
}

const test = factorial(5)
console.log(test)