/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    if (A.every(a=>a === A[0]) && B.every(a=>a === B[0]) ) {
        return 1
    }
    
    var count = 0, diff1 = -1, diff2 = -1, count1 = 0, count2 = 0;
    for ( var i = 0; i < A.length; i++){
        count = getOccurrence(A.concat(B), A[i]);
        if (count >= A.length) {
            tryToSwap = A[i]
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] !== tryToSwap && B[i] === tryToSwap) {
            count1++;
        }
        if (B[i] !== tryToSwap && A[i] === tryToSwap) {
            count2++;
        }
    }
   diff1 = A.length - getOccurrence(A, tryToSwap) - count1;
   diff2 = B.length - getOccurrence(B, tryToSwap) - count2;

    function getOccurrence(array, value) {
        return  array.filter((v) => (v === value)).length;
    }
    if (diff2 === -1 && diff1 === -1) {
        return -1
    } else if (diff2 === 0 && diff1 === 0) {
        return diff1 > diff2 ? count2 : count1
    } else {
        return diff1 > -1 ? count1 : count2;
    }
};

console.log(minDominoRotations( [3,5,1,2,3],[3,6,3,3,4] ))