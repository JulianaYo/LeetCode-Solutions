// https://leetcode.com/problems/is-subsequence/
// 2/01/2020
// 14 / 14 test cases passed.
// Runtime: 128 ms, faster than 5.01% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 55.8 MB, less than 33.33% of JavaScript online submissions for Is Subsequence.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t === "" && s !== "") {
        return false
    }
    if (s === "" || (s === "" && t === "")) {
        return true
    }
    var arr=[];
    var sArr = s.split("");
    var tArr = t.split("");
    for (var i = 0; i < s.length; i++) {
        for (var k = i; k < t.length; k++) {
            if (!tArr.includes(sArr[i])) {
                return false
            } else {
                arr.push(tArr.indexOf(sArr[i]));
                tArr.fill(0,0,(tArr.indexOf(sArr[i])+1))
                break;
            }
        }
    }
    function sortNumber(a, b) {
        return a - b;
      }
    return arr.join('') === arr.sort(sortNumber).join('')
};