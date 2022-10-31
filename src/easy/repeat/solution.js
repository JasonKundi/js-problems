



const repeatStr = (str) => {
    console.log("String is in function:", str)
    const splitStr = str.split('')

    for (let i = 0; i < splitStr.length; i++) {
        let result = []
        console.log(splitStr[i],"this is split string")
        result.push(splitStr[i].repeat(2));
        if (splitStr[i] == true) {
            continue;
        }
        return result
    }


}


console.log(repeatStr("string"));