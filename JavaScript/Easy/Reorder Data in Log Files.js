// https://leetcode.com/problems/reorder-data-in-log-files/
// 03/02/2020
// 63 / 63 test cases passed.
// Runtime: 80 ms, faster than 27.46% of JavaScript online submissions for Reorder Data in Log Files.
// Memory Usage: 38.5 MB, less than 42.86% of JavaScript online submissions for Reorder Data in Log Files.

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    var arr1 = [], arr2 = []
    for (var i = 0; i < logs.length; i++){
        var checkArr = logs[i].split(" ");
        if (!isNaN(checkArr[1])){
            arr1.push(logs[i])
        } else {
            arr2.push(logs[i])
        }    
    }
    arr2.sort(function(a,b) {
        var f = a.split(" ")[1]
        var h = b.split(" ")[1]
        var n = a.split(" ")[2]
        var d = b.split(" ")[2]
        var l = a.split(" ")[0]
        var z = b.split(" ")[0]
        if (f === h && n === d) {
            return l.localeCompare(z);
        }
        return f === h ? n.localeCompare(d) : f.localeCompare(h);
    })  
    return arr2.concat(arr1)
};