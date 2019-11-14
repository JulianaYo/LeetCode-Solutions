var numEquivDominoPairs = function(dominoes) {
    var a,b, count = 0;
    a =  dominoes.join(',')
    console.log(a)
    for (var i = 0; i < dominoes.length; i++){
        [a,b] = [dominoes[i][1], dominoes[i][0]]

        if (dominoes.find([a,b]))
        {
           count++
        } 
    }
    return count
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]))