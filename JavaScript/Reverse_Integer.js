// https://leetcode.com/problems/reverse-integer/
// 28/10/2019
// 1032 / 1032 test cases passed.
// Runtime: 80 ms, faster than 42.42% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.1 MB, less than 19.79% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var minus;
    if ( x < 0 ) {
        minus = 1;
        x = -x;
    }
    while (x !==0 && x % 10 === 0) {
        x = x / 10;
    }
    var g = x.toString().split('').reverse().toString().replace(/,/g,'');

    if ( x===0  || g > 0x7FFFFFFF) {
        return 0
    } else {
    if (minus)
    {
        return -g
    } else {
        return g
    }
        }
}