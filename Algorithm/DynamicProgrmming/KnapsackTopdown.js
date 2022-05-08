// algo to solve knapsack Dp:
    // if (wt[i-1] < j) {
    //     t[i][j] = max(val[i-1] + t[i-1][j-wt[i-1]], t[i-1][j])
    // } else {
    //     t[i][j] = t[i-1][j]
    // }



const print2DMatrix = (matrix) => {
    for (let i=0; i<matrix.length; i++) {
        let row = '';
        for (let j=0; j<matrix[i].length; j++) {
            row += matrix[i][j] + ' '
        }
        console.log(row)
    }
}

const knapsackTopdown = (weightArray, valueArray, totalWeight, n) => {
  let matrix = [];
  for (let i = 0; i < n + 1; i++) {
    matrix.push([]);
    for (let j=0; j<totalWeight+1;j++) {
        if (i==0||j==0) matrix[i].push(0)
        else matrix[i].push(undefined)
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j=1; j<totalWeight+1;j++) {
        if (weightArray[i] > j) {
            matrix[i][j] = matrix[i-1][j]
        } else {
            matrix[i][j] = Math.max(valueArray[i] + matrix[i-1][])
        }
    }
  }
  
print2DMatrix(matrix)
};

console.log(knapsackTopdown([1, 2, 3, 4], [2, 3, 4, 1], 7, 4));


