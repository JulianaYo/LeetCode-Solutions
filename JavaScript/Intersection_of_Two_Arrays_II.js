// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// 15/11/2019
// 61 / 61 test cases passed.
// Runtime: 56 ms, faster than 85.48% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 34.1 MB, less than 88.89% of JavaScript online submissions for Intersection of Two Arrays II.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = [];
    var [minArr, maxArr] = nums1.length >= nums2.length ? [nums2, nums1] : [nums1, nums2];
    for (var i = 0 ; i < minArr.length; i++){
        if (maxArr.includes(minArr[i])) {
            
            maxArr.splice(maxArr.indexOf(minArr[i]), 1);
            arr.push(minArr[i])
        }
    }
    return arr
};