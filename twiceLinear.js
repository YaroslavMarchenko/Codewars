function dblLinear(n) {
  
    var k = [1], a1 = 0, a2 = 0; //two pointer
    
    for(var i = 1;i<=n;i++){
      k[i] = Math.min(2* k[a1] + 1, 3*k[a2] + 1);
      if(k[i] == 2 * k[a1] + 1) a1++;
      if(k[i] == 3 * k[a2] + 1) a2++;
    }

    return k[n];
  
}
