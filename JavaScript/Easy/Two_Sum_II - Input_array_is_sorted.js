// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 19/11/2019
// 17 / 17 test cases passed.
// Runtime: 504 ms, faster than 5.30% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 35.4 MB, less than 13.04% of JavaScript online submissions for Two Sum II - Input array is sorted.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var arr = [];
    var idx;
    if ( numbers[numbers.length - 1] < target) {
        idx = numbers[numbers.length - 1]
    }
    for (var i = 0; i < numbers.length; i ++) {
         if ( numbers[i] >= target) {
             idx = i+1;
             break
         }
    }
    for (var i = 0; i <=idx; i++) {
        for (var j = 0; j <= idx; j++) {
                        if (i != j) {
                            if ( numbers[i] + numbers[j] === target) {
                                arr.push(i+1)
                            }
                        }
                    }
    }
    return arr
};