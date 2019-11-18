// https://leetcode.com/problems/length-of-last-word/
// 30/10/2019
// 59 / 59 test cases passed.
// Runtime: 44 ms, faster than 97.82% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.7 MB, less than 92.31% of JavaScript online submissions for Length of Last Word.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    String.prototype.rltrim = function () {
         return this.replace(/((\s*\S+)*)\s*((\S+\s*)*)/, "$1");
     }

     var arr = s.rltrim().split(' ')
     
     if (arr.length > 0) {
         return arr[arr.length - 1].length
     }
     return 0
};
