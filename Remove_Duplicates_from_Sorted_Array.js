// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 10/11/2019
// 161 / 161 test cases passed.
// Runtime: 72 ms, faster than 70.39% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.5 MB, less than 33.33% of JavaScript online submissions for Remove Duplicates from Sorted Array.

var removeDuplicates = function(nums) {
    for(var i=(nums.length - 1); i > -1;i-- )
     { 
        if(nums[i] === nums[i - 1]) {
            nums.splice(i,1); 
      } 
    }
    return nums.length
};
console.log(removeDuplicates( [1,1,2]))