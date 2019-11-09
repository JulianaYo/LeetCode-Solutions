// https://leetcode.com/problems/length-of-last-word/
// 30/10/2019
// 59 / 59 test cases passed.
// Runtime: 52 ms, faster than 76.83% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.8 MB, less than 80.77% of JavaScript online submissions for Length of Last Word.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    String.prototype.rtrim = function () {
         return this.replace(/((\s*\S+)*)\s*/, "$1");
     }
     String.prototype.ltrim = function () {
         return this.replace(/\s*((\S+\s*)*)/, "$1");
     }
     var arr = s.rtrim().ltrim().split(' ')
     
     if (arr.length > 0) {
         return arr[arr.length - 1].length
     }
     return 0
};