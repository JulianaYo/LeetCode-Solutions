// https://leetcode.com/problems/add-strings/
// 4/11/2019
// 315 / 315 test cases passed.
// Runtime: 540 ms, faster than 5.01% of JavaScript online submissions for Add Strings.
// Memory Usage: 44.1 MB, less than 12.50% of JavaScript online submissions for Add Strings.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var sumArr, slicedNum, leng, count = 0;
        function cutArrays(a,b) {
           leng = Math.abs(a.length - b.length);
           if (leng > 0) {
            return a.length > b.length ? [ a.split('').slice(leng), b.split('') ] : [b.split('').slice(leng), a.split('')]
           } else {
               return [ a.split(''), b.split('')]
           }
        }
        sumArr = cutArrays(num1, num2)[0].map(function (num, idx) {
            return parseInt(num) + parseInt(cutArrays(num1, num2)[1][idx]);
          })
    
        slicedNum = num1.length > num2.length ? BigInt(num1.slice(0, leng)) : BigInt(num2.slice(0, leng));
        for ( var i = sumArr.length - 1; i >= 0; i--){
            console.log(sumArr[i])
           if (sumArr[i] >=10) {
               sumArr[i] = sumArr[i] % 10;
               if (sumArr[i - 1] != undefined) {
                sumArr[i - 1] = sumArr[i - 1] + 1
                
               } else {
                //    sumArr.unshift(1);
                   count++
               }
           }
        }
        if (!slicedNum) {
            slicedNum = ''
        }
    
        if (count === 0) {
            return slicedNum + '' + sumArr.join('')
        } else {
            slicedNum++
            return slicedNum + '' + sumArr.join('')
        }
    };