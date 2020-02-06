// https://leetcode.com/problems/prison-cells-after-n-days/
// 05/01/2020
// 258 / 258 test cases passed.
//Runtime: 64 ms, faster than 83.08% of JavaScript online submissions for Prison Cells After N Days.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Prison Cells After N Days.

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
        var arr1 = cells;
        var days = N % 14 || 14;
        for ( var j = 0; j < days; j++){
            var arr2 = []
            arr2.push(0)
            for (var i = 1; i < cells.length - 1; i++) {
            
            if (arr1[i - 1] === arr1[i + 1]) {
                arr2.push(1)
            } else {
                arr2.push(0)
            }
            }
        arr2.push(0)
        arr1 = arr2;
        }
        return arr1
};