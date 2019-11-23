// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
// 22/11/2019
// 34 / 34 test cases passed.
// Runtime: 5596 ms, faster than 16.18% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    var count = 0;
for (var i = 0; i < time.length; i++) {
    for (var j = i+1; j < time.length; j++) {
        if ((time[i] + time[j]) % 60 == 0) {
            count++
        }
    }
}
return count
};