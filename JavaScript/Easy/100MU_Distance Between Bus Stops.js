// https://leetcode.com/problems/distance-between-bus-stops/
// 5/01/2020
// 37 / 37 test cases passed.
// Runtime: 44 ms, faster than 98.73% of JavaScript online submissions for Distance Between Bus Stops.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Distance Between Bus Stops.

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    var sum1 = 0, sum2 = 0;
    if (destination < start) {
        for (var i = destination; i < start; i++) {
            sum1 = sum1 + distance[i]
        }
        for (var i = 0; i < destination; i++) {
            sum2 = sum2 + distance[i]
        }
        for (var i = start; i < distance.length; i++) {
            sum2 = sum2 + distance[i]
        }

    } else {
        for (var i = start; i < destination; i++) {
            sum1 = sum1 + distance[i]
        }
        for (var i = 0; i < start; i++) {
            sum2 = sum2 + distance[i]
        }
        for (var i = destination; i < distance.length; i++) {
            sum2 = sum2 + distance[i]
        }
    }
    if (start === destination) {
        return 0
    }

    return sum1 > sum2 ? sum2 : sum1
};