const reverseString = function(string) {
    let revesedArray = []
    let revesedString = ""
    for(let i = 1; i <= string.length; i++){
        revesedArray [i - 1] = string[string.length - i]
        revesedString += revesedArray[i - 1]
    }
    return revesedString
};

// Do not edit below this line
module.exports = reverseString;


// Better way to do it

// return string.split('').reverse().join('');