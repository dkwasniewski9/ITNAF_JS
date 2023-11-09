function isHappyNumber(a){
    let numStr = a.toString()
    let sum = 0
    while(numStr.length > 1){
        sum = 0
        for(i = 0; i < numStr.length; ++i){
            sum += parseInt(numStr.charAt(i)) * parseInt(numStr.charAt(i))
        }
        numStr = sum.toString();
    }
    if(numStr == '1') return true
    else return false
}


console.log(isHappyNumber(19))