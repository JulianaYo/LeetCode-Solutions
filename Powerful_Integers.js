// https://leetcode.com/problems/powerful-integers/
// 16/11/2019
// 93 / 93 test cases passed.
// Runtime: 64 ms, faster than 27.88% of JavaScript online submissions for Powerful Integers.
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Powerful Integers.


/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var arr = [];
    for (var i = 0; i <= Math.log(bound) + 6; i++) {
        for (var j = 0; j <= Math.log(bound) + 6; j++){
            var checkNum = Math.pow(x, i) + Math.pow(y, j);
          
            if (checkNum <= bound) {
                arr.push(checkNum)
            }
        }
    }
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    return arr.filter( onlyUnique );
};