function power (n, p) { 
    //return n**p;
    if (p ==1) return n;
    return n * power(n, p-1)
  }
  console.log(power(3,4)) //should return 81