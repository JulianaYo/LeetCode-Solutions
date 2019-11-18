// https://leetcode.com/problems/factorial-trailing-zeroes/
// 27/10/2019
// 502 / 502 test cases passed.
// Runtime: 7792 ms, faster than 5.21% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 34.7 MB, less than 25.00% of JavaScript online submissions for Factorial Trailing Zeroes.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var count = 0, x = n;
    for (var i = 1; i <= x; i ++) {
        if (i % 5 === 0) {
            n = i
            while (n % 5 === 0) {
                count++
                n = n / 5;
            }
        }
    }
return count
}