const leapYears = function(yearToTest) {
    
    if (yearToTest % 400 == 0) {
        return true;
    } else if (yearToTest % 100 == 0) {
        return false; 
    } else if (yearToTest % 4 == 0) {
        return true;
    } else {
        return false;
    }
    
    
    /* if (yearToTest % 4 == 0) {
        if (yearToTest % 100 == 0) {

        }
        return true;
    } else {
        return false;
    } */ 
};
// Do not edit below this line
module.exports = leapYears;
