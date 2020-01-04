// https://leetcode.com/problems/occurrences-after-bigram/
// 03/01/2020
// 29 / 29 test cases passed.
// Runtime: 48 ms, faster than 90.28% of JavaScript online submissions for Occurrences After Bigram.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Occurrences After Bigram.


/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    var arr = [];
    var arr1 = text.split(' ');
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === first && arr1[i+1] === second) {
            if (arr1[i+2]) {
                arr.push(arr1[i+2])
            }
        }
    }
    return arr;
};
