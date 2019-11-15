// https://leetcode.com/problems/island-perimeter/
// 15/11/2019
// 5833 / 5833 test cases passed.
// Runtime: 580 ms, faster than 5.17% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 93.5 MB, less than 12.50% of JavaScript online submissions for Island Perimeter.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if (grid.length === 1 && grid[0].length === 1){
          return 4
      }
      var count = 0;
  
      for (var i = 0; i < grid.length; i++){
          for (var j = 0; j < grid[i].length; j++){
              if ( grid[i][j] === 1) {
                  if ( i === 0 ) {
                      count++
                  }
                  if ( grid.length === 1 ) {
                      count++
                  }
                  if ( i != 0 && i === (grid.length - 1)) {
                      count++
                  }
                  if ( j === 0  ) {
                      count++
                  }
                  if (  j === (grid[i].length - 1)) {
                      count++
                  }
                  if (  grid[i][j-1] === 0) {
                      count++
                  }
                  if (  grid[i][j+1] === 0) {
                      count++
                  }
                  if ( i < (grid.length - 1) && grid[i+1][j] === 0) {
                     
                      count++
                  }
                  if ( i > 0 && grid[i-1][j] === 0) {
                      
                      count++
                  }
              }
          }
      }
      return count
  };