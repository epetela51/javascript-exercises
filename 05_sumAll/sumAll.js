const sumAll = function(num1, num2) {
    
    // grabs the minimum number out of the two
    let minNumber = Math.min(num1, num2);
    // grabs the maximum number out of the two
    let maxNumber = Math.max(num1, num2);

    // if either number is less than 0 aka a negative
    if (num1 < 0 || num2 < 0) return "ERROR";
    // if either is NOT a number like a string
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let sum = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
};

sumAll("5",2)

// Do not edit below this line
module.exports = sumAll;
