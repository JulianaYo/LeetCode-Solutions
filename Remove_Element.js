// https://leetcode.com/problems/remove-element/
// 10/11/2019
// 113 / 113 test cases passed.
// Runtime: 48 ms, faster than 95.86% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.8 MB, less than 77.78% of JavaScript online submissions for Remove Element.

var removeElement = function(nums, val) {
    for(var i=(nums.length - 1); i > -1;i-- )
     { 
        if(nums[i] === val) {
            nums.splice(i,1); 
      } 
    }
    return nums.length
};

