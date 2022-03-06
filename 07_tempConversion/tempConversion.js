// solved on my own

const ftoc = function(temp) {
  let conversion = (temp -32) /1.8;
  let convertedNumber = Math.round(conversion * 10) / 10;
  return convertedNumber;
};

ftoc(32);

const ctof = function(temp) {
  let conversion = (temp * 1.8) + 32;
  let convertedNumber = Math.round(conversion * 10) / 10;
  return convertedNumber;
};

ctof (0);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
