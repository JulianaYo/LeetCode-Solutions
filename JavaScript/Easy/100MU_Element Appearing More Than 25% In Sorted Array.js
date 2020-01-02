// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// 2/01/2020
// 18 / 18 test cases passed.
// Runtime: 516 ms, faster than 5.29% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
// Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    function getOccurrence(array, value) {
        return  array.filter((v) => (v === value)).length;
    }
    for (var i = 0; i < arr.length; i++) {
        
        if (getOccurrence(arr, arr[i]) > parseInt((arr.length / 4),10)) {
           return arr[i]
        }
    }
};