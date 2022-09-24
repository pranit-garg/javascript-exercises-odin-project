const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else {
        let newNum = parseInt(num);
        let sequenceArray = [1, 1];
        let sum;
        if (newNum == 1 || newNum == 2) {
            return 1;
        } else {
            for (let i = 0; i < newNum - 2; i++) {
                sum = sequenceArray[sequenceArray.length - 1] + sequenceArray[sequenceArray.length - 2]
                sequenceArray.push(sum);
            }
        }
        return sum;
    } 
};

fibonacci("1")

// Do not edit below this line
module.exports = fibonacci;
