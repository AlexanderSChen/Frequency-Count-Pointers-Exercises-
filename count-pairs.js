// add whatever parameters you deem necessary
function countPairs(arr, num) {
    // Sorts array and initializes points
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    // while start less than end
    while(start < end) {
        // set sum equal to start + end, if equals target num then increment count and start and decrement end
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}
module.exports = countPairs;