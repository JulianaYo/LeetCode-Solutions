// https://leetcode.com/problems/valid-boomerang/
// 07/01/2020
// 190 / 190 test cases passed.
// Runtime: 52 ms, faster than 88.89% of JavaScript online submissions for Valid Boomerang.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Valid Boomerang.

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    var x1 = points[0][0], x2 = points[1][0], y1 = points[0][1], y2 = points[1][1], z1 = points[2][0], z2 = points[2][1];
    if (!((x1 != x2 || y2 != y1) && (x1 != z1 || y1 != z2) && (x2 != z1 || y2 != z2))) {
        console.log('here')
        return false
    } else {
        for (var i = 2; i < points.length ; i++){
            var coord = (points[i][0] - x1) * (y2 - y1) - (x2 - x1)*(points[i][1] - y1)
            if (coord != 0){
                return true
            }
        }
    }
    return false
};