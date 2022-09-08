const removeFromArray = function(array, ...args) {
console.log(array);
console.log(args);
let returnArray = [];

for (let i = 0; i < array.length; i++) {
   if (!args.includes(array[i])) {
    returnArray.push(array[i]);
   }
}

return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;


console.log(removeFromArray([2, 3, 4, 5, 6], 5, 6, 2))