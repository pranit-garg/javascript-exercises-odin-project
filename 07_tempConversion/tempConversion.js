const ftoc = function(fheit) {
  let celsius = (fheit - 32) * 5/9;
  return Math.round(celsius * 10)/10;
};

const ctof = function(celsius) {
  let fheit = celsius * 9/5 + 32;
  return Math.round(fheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

console.log(ftoc(40), ctof(40));