function sumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        first = [],
        inst = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(inst[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) first.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            inst[j] = true;
        }
    }

    return first;
}
