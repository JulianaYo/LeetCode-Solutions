// https://leetcode.com/problems/most-common-word/
// 04/02/2020
// 47 / 47 test cases passed.
// Runtime: 112 ms, faster than 5.32% of JavaScript online submissions for Most Common Word.
// Memory Usage: 41.2 MB, less than 50.00% of JavaScript online submissions for Most Common Word.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var count = 0, arr = []
    paragraphArr = paragraph.toLowerCase().match(/\w+/g)
    for (var i = 0; i < paragraphArr.length; i++) {
        var temp = '';
        if (!banned.includes(paragraphArr[i])) {
            temp = paragraphArr[i];
        }
        count = paragraphArr.reduce((n, x) => n + (x.toLowerCase() === temp), 0);
        arr.push(count)
    }
    return paragraphArr[arr.indexOf(Math.max.apply(null, (arr)))]
};