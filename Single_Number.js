// https://leetcode.com/problems/single-number/
// 7/11/2019 submission date
// 16 / 16 test cases passed.
// Runtime: 84 ms, faster than 23.17% of JavaScript online submissions for Single Number.
// Memory Usage: 36.7 MB, less than 53.85% of JavaScript online submissions for Single Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
      for (var i = 0; i < nums.length; i++){
          if ( i % 2 === 0 && nums[i + 1] !== nums[i]){
              return nums[i]
          }
      }
 };