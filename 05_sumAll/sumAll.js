const sumAll = function(num1, num2) {
    let sum = 0;
    let smallerNum;
    let largerNum;

    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    if (num1 < num2) {
        smallerNum = num1;
        largerNum = num2;
    } else {
        smallerNum = num2;
        largerNum = num1;
    }



    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(1, 4));