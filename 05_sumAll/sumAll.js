const sumAll = function(lowerNum, higherNum) {
    let total = 0
    if(!Number.isInteger(lowerNum) || !Number.isInteger(higherNum)) return "ERROR";
    if(lowerNum < 0 || higherNum < 0) return "ERROR"

    if(lowerNum > higherNum){
        let temp = higherNum
        higherNum = lowerNum
        lowerNum = temp
    }
    
    for(let i = lowerNum; i <= higherNum; i++){
        total += i;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
