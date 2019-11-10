// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// 10/11/2019
// 166 / 166 test cases passed.
// Runtime: 64 ms, faster than 85.01% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Remove Duplicates from Sorted Array II.


var removeDuplicates = function(nums) {
    for(var i=(nums.length - 1); i > -1;i-- )
    { 
       if(nums[i] === nums[i - 2]) {
           nums.splice(i,1); 
     } 
   }
   return nums.length
};
