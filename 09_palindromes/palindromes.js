const palindromes = function (string) {
    let letterMatchRegex = /[a-zA-Z]/
    let arrayToTest = [];
    for (let i = 0; i < string.length; i++) {
        if (letterMatchRegex.test(string[i])) {
            arrayToTest.push(string[i]);
        }
    }
    let palindromeToTest = arrayToTest.join('')
    let palindromeToTestLower = palindromeToTest.toLowerCase();

    console.log(palindromeToTestLower);

    for (let i = 0, j = palindromeToTestLower.length - 1; i < palindromeToTestLower.length; i++, j--) {
        let goingForward = palindromeToTestLower[i];
        let goingBackwards = palindromeToTestLower[j];
        if (goingForward !== goingBackwards) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
palindromes("RaCecar!")