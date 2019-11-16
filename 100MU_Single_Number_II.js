// https://leetcode.com/problems/single-number-ii/
// 11 / 11 test cases passed.
// 7/11/2019 submission date
// Runtime: 68 ms, faster than 34.98% of JavaScript online submissions for Single Number II.
// Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions for Single Number II.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
      for (var i = 0; i < nums.length; i+=3){
          if (!(nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2])){
              return nums[i]
          }
      }
};