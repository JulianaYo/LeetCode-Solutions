// https://leetcode.com/problems/move-zeroes/
// 1/11/2019
// 21 / 21 test cases passed.
// Runtime: 64 ms, faster than 64.45% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 35.8 MB, less than 36.17% of JavaScript online submissions for Move Zeroes.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0; 
    for(var i=(nums.length - 1); i > -1;i-- )
     { 
        if(nums[i] === 0) {
            nums.splice(i,1); 
            count++
      } 
    }
    for (var i = 0; i< count; i++){
      nums.push(0)
    }
   return nums
};