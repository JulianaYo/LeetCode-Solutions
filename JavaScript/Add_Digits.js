// https://leetcode.com/problems/add-digits/
// 1/11/2019
// 1101 / 1101 test cases passed.
// Runtime: 72 ms, faster than 76.05% of JavaScript online submissions for Add Digits.
// Memory Usage: 36.3 MB, less than 33.33% of JavaScript online submissions for Add Digits.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var sum, total;
  function superSum(j) {
  sum = j.toString().split('').map( function(item){
      return parseInt(item, 10);
   });
   total = sum.reduce(function(a, b) {
      return a + b;
  })
  
   if ( total >= 10) {
       superSum(total);
   } else {
       return total
   }
  
  return total
}
return superSum(num);  
};