function removeEveryOther(arr){
    //your code here
    let newArr = []
    for(let i=0; i < arr.length; i=i+2) {
      newArr.push(arr[i])
      }
    return newArr
    }
    