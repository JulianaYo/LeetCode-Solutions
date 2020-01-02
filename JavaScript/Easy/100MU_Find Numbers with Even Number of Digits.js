//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// 2/01/2020
//102 / 102 test cases passed.
//Runtime: 52 ms, faster than 92.47% of JavaScript online submissions for Find Numbers with Even Number of Digits.
//Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count=0;
        for( var i = 0; i < nums.length; i++){
            if (nums[i].toString().split("").length % 2 === 0) {
                count++
            }
        }
    return count
};
