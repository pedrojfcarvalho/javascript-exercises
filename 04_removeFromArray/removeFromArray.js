const removeFromArray = function(testArray, ...nums) {

    const arraySize = testArray.length;
    let index;

    for(let i = 0; i < arraySize; i++) {
        for(let j = 0; i < nums.length; j++) {
            index = testArray.indexOf(nums[j]);
            if(index > -1) {{
                testArray.splice(index, 1);
            }}
        }
    }

    return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;
