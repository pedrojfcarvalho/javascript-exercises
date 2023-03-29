const repeatString = function(word, num) {

    let finalWord = '';

    if(num >= 0) {
        for(let i = 0; i < num; i++) {
            finalWord += word;
        }
    } else {
        return 'ERROR';
    }
    

    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
