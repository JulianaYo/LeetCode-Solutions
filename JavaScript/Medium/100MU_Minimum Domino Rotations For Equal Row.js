// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
// 2/01/2020
// 84 / 84 test cases passed.
// Runtime: 80 ms, faster than 85.14% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 41.3 MB, less than 100.00% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    var count1 = swapDominos(A[0], A, B);
    var count2 = swapDominos(B[0], B, A);
    var count3 = swapDominos(B[0], A, B);
    var count4 = swapDominos(A[0], B, A);
    function swapDominos(swap, arr1, arr2) {
        var count = 0;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== swap && arr2[i] !== swap) {
                return -1
            } else {
                if (arr1[i] !== swap) {
                    count++
                }
            }
        }
        return count
    }
    var arr = [count1, count2, count3, count4].filter(a => a !== -1);
    return arr.length > 0 ? Math.min.apply(Math,arr) : -1
    };