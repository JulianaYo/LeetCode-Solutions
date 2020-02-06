// https://leetcode.com/problems/height-checker/
// 02/02/2020
// 79 / 79 test cases passed.
// Runtime: 48 ms, faster than 99.27% of JavaScript online submissions for Height Checker.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Height Checker.
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var count = 0;
    var newArr = sort(heights);
    function sort(arr) {
        return arr.concat().sort(function(a,b) { return a - b});
      }
    for (var i = 0; i < heights.length; i++) {
        if (newArr[i] !== heights[i]) {
            count++
        }
    }
    return count;
};