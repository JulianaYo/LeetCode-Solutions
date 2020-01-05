/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    var sum1 = 0, sum2 = 0;
    for (var i = start; i < destination; i++) {
        sum1 = sum1 + distance[i]
       
    }
    for (var i = (distance.length - 1); i >= destination; i--) {
        sum2 = sum2 + distance[i]
     
    }

    return sum1 > sum2 ? sum2 : sum1
};

console.log(distanceBetweenBusStops([1,2,3,4], 0, 3))