// https://leetcode.com/problems/find-common-characters/
// 15/11/2019
// 83 / 83 test cases passed.
// Runtime: 60 ms, faster than 94.33% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 36.9 MB, less than 85.71% of JavaScript online submissions for Find Common Characters.

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var arr = []; arrChecker = A[0].split('');
    A.shift()
    arrChecker.forEach( function(elem) {
        var el = A.every((item) => {
            return item.includes(elem)
        })
        if (el) {
            A = A.map((x) =>  x.replace(elem, ''))
            arr.push(elem)
        }
    })
    return arr
};