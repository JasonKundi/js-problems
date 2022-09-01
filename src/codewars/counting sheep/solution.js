function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let counter = 0
    for(let i=0; i<arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        console.log(counter)
        counter++
      }
    }
    return counter
  }