// https://leetcode.com/problems/roman-to-integer/
// 31/10/2019
// 3999 / 3999 test cases passed.
// Runtime: 132 ms, faster than 92.10% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 41.6 MB, less than 6.38% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var objRoman = {
   'CM': 900,
   'CD': 400,
   'XC': 90,
   'XL': 40,
   'IX': 9,
   'IV': 4,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,  
}

var keys = Object.keys(objRoman);
var num = 0;
for (var j = 0; j < s.length; j++){
for ( var i = 0; i < keys.length; i++){
   if (s.includes(keys[i])) {
       
       num = num + objRoman[keys[i]];
       
       s = s.replace(keys[i], '0')
       break;
   }
}
}
return num
};