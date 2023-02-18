// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // convert numbers to strings
    let str1 = num1.toString();
    let str2 = num2.toString();
    // if length does not match return false
    if(str1.length !== str2.length) return false;

    // initialize empty objects to store frequency of each digit
    let count1 = {};
    let count2 = {};

    // iterate over each char in str1 and updates frequency in count 1. 182 becomes {'1': 1, '8': 1, '2': 1}
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }

    // iterate over each char in str2 and store frequency of each number in count 2
    for(let j = 0; j < str2.length; j++) {
        count2[str2[j]] = (count2[str2[j]] || 0) + 1;
    }

    // iterate over each key in count1 and check frequency of that digit in count1 is equal to frequency of digit in count2 since both counts are equal for each digit it will return true.
    for(let key in count1) {
        if(count1[key] !== count2[key]) return false;
    }
    return true;
}

module.exports = sameFrequency;