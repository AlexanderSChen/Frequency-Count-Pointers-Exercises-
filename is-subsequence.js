// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    // if str1 is missing return true
    if(!str1) return true;
    // loop through str2
    while(str2Idx < str2.length) {
        // if strings match at the index the increment str1Idx
        if (str2[str2Idx] === str1[str1Idx]) {
            str1Idx += 1;
        }
        // if end of str1 is reached return true.
        if(str1Idx === str1.length) return true;
        str2Idx += 1;
    }
    return false;
}

module.exports = isSubsequence;