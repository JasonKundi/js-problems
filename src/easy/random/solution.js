
const getRandomNumber = (max, min) => {

    return Math.random() * (max - min) + min

}

const test = getRandomNumber(1, 100)

console.log(test)
