const reverseString = function(string) {
    let stringSize = string.length;
    let finalString = '';

    for(let i = 0; i <= stringSize; i++) {
        finalString += string.slice(stringSize - i, stringSize + 1 - i);
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
