/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var arr = []; boolArr = [];
    if (nums[0] === 0 && nums.length > 1) {
        return false
        }
    if (nums.every(item => item !== 0) || nums.length <= 1) {
        return true
    }
    for (var i = 0; i < nums.length; i++) {

        if ( i != nums.length - 1 && i + nums[i] >= (nums.length - 1)) {
            console.log(i, nums[i])
            return true
        }
        if (nums[i] === 0 && i < (nums.length - 1)) {
           arr = nums.slice(0, i);
          
           boolArr.push(arr.includes( element => {
            (arr.indexOf(element) + element) > i
           }))
        }
        if ( nums[i] === 0 && nums[i - 1] === 1) {
            var check = nums.slice(0, i).includes( element => {
                (nums.slice(0, i).indexOf(element) + element) > i
               })
               
            if (!check) {
                return false
            }
        }
    }
    return boolArr.every( item => item === true) ? true : false
};

console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))