// https://leetcode.com/problems/to-lower-case/
// 12/11/2019
// 8 / 8 test cases passed.
// Runtime: 40 ms, faster than 99.09% of JavaScript online submissions for To Lower Case.
// Memory Usage: 33.8 MB, less than 61.54% of JavaScript online submissions for To Lower Case.


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseArr = upperCaseArr.join('').toLowerCase().split('');
var idx;
return str.split('').map( (elem) => {
  idx = upperCaseArr.findIndex(ind => {
      return ind === elem
  })
  if (idx >= 0) {
      return lowerCaseArr[idx]
  } else {
      return elem
  }
}).join('')
};