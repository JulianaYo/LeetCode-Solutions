// https://leetcode.com/problems/perfect-number/
// 4/11/2019
// 156 / 156 test cases passed.
// Runtime: 2052 ms, faster than 47.27% of JavaScript online submissions for Perfect Number.
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Perfect Number.

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var sum = 1;
    if ( num === 0  || num === 1) {
        return false
    }

    for (var i = 2; i <= num/2 ; i++) {
        if ( num % i === 0) {
            sum = sum + i
        }
        if (sum === num ) {
            return true
        }
         if (sum > num ) {
             return false
         }
    }
    return false;
};