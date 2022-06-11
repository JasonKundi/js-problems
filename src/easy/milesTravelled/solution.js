// miles travelled
// function with two args - travel mins and speed in milesTravelled
//  calculate distance

// distance = speed * time

const milesTravelled =(speed, time)=> {
    let minutes = time / 60
    let distance = speed * minutes;
    let result = Math.round(distance);
    return result

}

const test = milesTravelled(120, 20)
console.log(test)