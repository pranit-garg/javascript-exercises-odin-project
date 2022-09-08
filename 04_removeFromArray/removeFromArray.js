const removeFromArray = function(array, ...args) {
    let returnArray = array;

    for (let i = 0; i < returnArray.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array[i] == args[j]) {
                continue;
            }
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;


console.log(removeFromArray([2, 3, 4, 5, 6], 5, 6, 2))