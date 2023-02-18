// add whatever parameters you deem necessary
function separatePositive(nums) {
    // initialize points
    let start = 0;
    let end = nums.length - 1;

    // while loop
    while(start < end) {
        // if start index is negative AND end index is positive
        // swap start and end numbers
        if(nums[start] < 0 && nums[end] > 0) {
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;

            // increment start and decrement end
            start += 1;
            end -= 1;
            // else if start index is positive increment 1 else decrement end.
        } else {
            if (nums[start] > 0) start += 1;
            else end -= 1;
        }
    }
    return nums;
}

module.exports = separatePositive;