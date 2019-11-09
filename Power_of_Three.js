/** https://leetcode.com/problems/power-of-three/*/
// 21038 / 21038 test cases passed.
// 9/11/2019 submission date
// Runtime: 224 ms, faster than 41.52% of JavaScript online submissions for Power of Three.
// Memory Usage: 47.9 MB, less than 60.00% of JavaScript online submissions for Power of Three.

var isPowerOfThree = function(n) {
    if (n === 0) {
        return false
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    if (n === 1) {
        return true
    }
    return false
};