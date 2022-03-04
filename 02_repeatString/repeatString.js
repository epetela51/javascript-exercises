const repeatString = function(str, num) {
    let word = ""

    for (let i = 0; i < num; i++) {
        word += str;
    }

    if (num < 0) {
        return "ERROR"
    } else {
        return word;
    }

};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
