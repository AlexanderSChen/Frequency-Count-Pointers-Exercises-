// add whatever parameters you deem necessary
function longestFall(nums) {
    let counter = 1;
    let maxCounter = 0;

    // quick fail case if array is empty
    if (nums.length === 0) return 0;

    // 
    for (let i = 1; i < nums.length; i++) {
        // if current number is smaller than previous number increment counter and update maxCounter to be counter or maxCounter
        if(nums[i] < nums[i - 1]) {
            counter++;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    // 1 is default value for a non-empty array
    return maxCounter || 1;
}

module.exports = longestFall;