// https://leetcode.com/problems/check-if-it-is-a-straight-line/
// 8/11/2019 submission date
// 66 / 66 test cases passed.
// Runtime: 44 ms, faster than 99.13% of JavaScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Check If It Is a Straight Line.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
            var x1 = coordinates[0][0], x2 = coordinates[1][0], y1 = coordinates[0][1], y2 = coordinates[1][1];
    for (var i = 2; i < coordinates.length ; i++){
        var coord = (coordinates[i][0] - x1) * (y2 - y1) - (x2 - x1)*(coordinates[i][1] - y1)
        if (coord != 0){
            return false
        }
    }
    return true
};