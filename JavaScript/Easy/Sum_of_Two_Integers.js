// https://leetcode.com/problems/sum-of-two-integers/
// 20/11/2019
// 13 / 13 test cases passed.
// Runtime: 48 ms, faster than 88.61% of JavaScript online submissions for Sum of Two Integers.
// Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Sum of Two Integers.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var arr1, arr2;

    if (a > 0 && b > 0) {
        arr1 = new Array(a);
        arr2 = new Array(b);
        return arr1.concat(arr2).length; 
    } else {
        if (a > 0 && b < 0 && Math.abs(b) > a) {
            arr1 = new Array(Math.abs(b));
            arr1.splice(0, (a))
            return -arr1.length; 
        } else if (a < 0 && b > 0 && Math.abs(a) > b) {
            arr1 = new Array(Math.abs(a));
            arr1.splice(0, (b))
            return -arr1.length; 
        } else if (a < 0 && b < 0) {
            arr1 = new Array(-a);
           arr2 = new Array(-b);
           return - arr1.concat(arr2).length; 
        } else if (a < 0 && b > 0 && Math.abs(a) >= b) {
            arr1 = new Array(Math.abs(a));
            arr1.splice(0, (b))
            return arr1.length === 0 ? 0 : -arr1.length; 
        } else if (a < 0 && b > 0 && Math.abs(b) >= a) {
            arr1 = new Array(b);
            arr1.splice(0, (Math.abs(a)))
            return arr1.length === 0 ? 0 : arr1.length; 
        }
        else {
            return a || b
        }
    }
};