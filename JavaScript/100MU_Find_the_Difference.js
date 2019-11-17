// https://leetcode.com/problems/find-the-difference/
// 15/11/2019
// 54 / 54 test cases passed.
// Runtime: 60 ms, faster than 73.13% of JavaScript online submissions for Find the Difference.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Find the Difference.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var newArr = (s + '' + t).split('').sort();
    for (var i = 0; i < (s.length + t.length) ; i+=2){
         
         if (newArr[i] != newArr[i + 1]) {
             return newArr[i]
         }
    }
};