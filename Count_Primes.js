// https://leetcode.com/problems/count-primes/
// 29/10/2019
// 20 / 20 test cases passed.
// Runtime: 816 ms, faster than 9.07% of JavaScript online submissions for Count Primes.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Count Primes.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0, primeNum;
    for (var j = 2; j < n ; j++){
    primeNum = isPrime(j);
    if (primeNum) {
        count++
    }
}

function isPrime(num) {
    for(var i = 2; i * i <= num ; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  return count
};