const removeFromArray = function(arr, ...args) {
    args.forEach((arg) => {
        const index = arr.indexOf(arg);
        if(index >= 0){
            arr.splice(index, 1);
        }
    });
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

/* 
    args.forEach((arg) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === arg){
                arr.splice(i,1)
            }
        }
    });
    return arr
 */