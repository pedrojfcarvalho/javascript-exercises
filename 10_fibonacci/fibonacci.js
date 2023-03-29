const fibonacci = function(num) {
    let fib = [0, 1];

    if(num < 0) {
        return "OOPS";
    }

    for(let i = 0; fib.length <= num; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }
    
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
