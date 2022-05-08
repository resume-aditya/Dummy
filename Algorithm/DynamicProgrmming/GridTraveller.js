// Number of ways a grid of m*n can be travelled

const gridTraveller = (m , n, memo = {}) => {
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    let key = m+','+n;
    if (memo[key]) return memo[key]
    let result =  gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo);
    memo[key] = result;
    return result;
}
console.log(gridTraveller(3, 3))
console.log(gridTraveller(2, 3))
console.log(gridTraveller(18, 18))


// Without memoization
    // Time: 2 power(n+m)
    // Space: n+m

// With memoization
    // Time: n*m
    // Space: n+m