// add whatever parameters you deem necessary
function pivotIndex(nums) {
    // set rightSum to be sum of all the numbers
    let rightSum = nums.reduce((a, b) => a + b, 0);
    // initialize other points
    let leftSum = 0;
    let pivotIdx = -1;
    // for loop where each iteration the function adds current number to leftSum and checks if it is equal to rightSum. If it is the function sets pivotIdx to the currentIdx and breaks out the loop. If not, function subtracts current number from rightSum and continues to next iteration.
    for(let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        if(leftSum === rightSum) {
            pivotIdx = i;
            break;
        }
        rightSum -= nums[i];
    }
    return pivotIdx;
}

module.exports = pivotIndex;