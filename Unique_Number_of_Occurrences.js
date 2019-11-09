// https://leetcode.com/problems/unique-number-of-occurrences/
// 6/11/2019
// 63 / 63 test cases passed.
// Runtime: 76 ms, faster than 7.25% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Unique Number of Occurrences.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var count, arrOfCount = [];
       function getOccurrence(array, value) {
           count = 0;
           array.forEach((v) => (v === value && count++));
           return count;
       }
       arr.sort()
       for (var i = 0; i < arr.length; i++){
           if (arr[i] != arr[i + 1]){
         arrOfCount.push(getOccurrence(arr, arr[i]))
           }
       }

       function onlyUnique(value, index, self) { 
           return self.indexOf(value) === index;
       }
       return arrOfCount.filter(onlyUnique).length === arrOfCount.length ? true : false
};