// https://leetcode.com/problems/container-with-most-water/
// 15/11/2019
// 50 / 50 test cases passed.
// Runtime: 652 ms, faster than 28.66% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 35.5 MB, less than 84.85% of JavaScript online submissions for Container With Most Water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   var maxVolume = 0;
   for (var i = 0; i < height.length; i++) {
       for (var j = i; j < height.length; j++) {
           Math.min(height[i], height[j]) * (j - i) > maxVolume ? maxVolume = Math.min(height[i], height[j]) * (j - i) : maxVolume = maxVolume
       }
   }
   return maxVolume;
  };