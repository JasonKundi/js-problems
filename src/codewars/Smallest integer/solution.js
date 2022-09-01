class SmallestIntegerFinder {
    findSmallestInt(args) {
      let lowestNum 
      for(let i=0; i<args.length;i++){
        if(args[i] <= args[0]){
          args[0] = args[i]
          lowestNum =args[i]
        }
      }
      return lowestNum
    }
  }