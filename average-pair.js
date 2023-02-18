// add whatever parameters you deem necessary
function averagePair(arr, num) {
    // initialize pointers
    let start = 0;
    let end = arr.length - 1;

    // while start is less than end continue looping
    while(start < end) {
        // set avg to be the average of the first and last number
        let avg = (arr[start] + arr[end]) / 2;
        // if avg === target return true otherwise continue looping with start incremented and end decremented
        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }
    // if none are true return false
    return false;
}

module.exports = averagePair;