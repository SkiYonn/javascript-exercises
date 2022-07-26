const fibonacci = function(str) {
    const a = Number(str)
    if (a < 1) return 'OOPS'
    let fibonacci = 1;
    let lastNumber = 0;
    let previousFib = 0;

    for(let i = 2; i <= a; i++){
        lastNumber = fibonacci;
        fibonacci = fibonacci + previousFib;
        previousFib = lastNumber;
    }
    return fibonacci
};

// Do not edit below this line
module.exports = fibonacci;
