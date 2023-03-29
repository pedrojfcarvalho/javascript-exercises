const sumAll = function(num1, num2) {

    let biggerNum, smallerNum, total = 0;

    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if(num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else {
        biggerNum = num2;
        smallerNum = num1;
    }

    for(let i = smallerNum; i <= biggerNum; i ++) {
        total += i;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
