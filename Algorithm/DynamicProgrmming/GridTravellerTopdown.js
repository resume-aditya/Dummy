const gridTraveller = (m, n) => {
    let table = Array(m + 1);
    for (let i = 0; i<=m; i++) {
        table[i] = Array(n + 1).fill(0)
    }
    for (let i=1; i<=m; i++) {
        for (let j=1; j<=n;j++) {
            if (i==1 && j == 1) {
                table[1][1] = 1;
            } else {
                table[i][j] = table[i-1][j] + table[i][j-1];
            }
        }
    }
    // console.log(table)
    console.log('No of ways to travel : ', table[m][n])
}
gridTraveller(3, 3)
gridTraveller(2, 3)
gridTraveller(18, 18)


// ORRRRRRRRRR

// for i<=m
//     for j<=n
//         table[i][j+1] += table[i][j]
//         table[i+1][j] += table[i][j]