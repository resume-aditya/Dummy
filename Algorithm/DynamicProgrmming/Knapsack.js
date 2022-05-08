// Considering  a weight W for knapsack, 
// input weight W
// input weight array of items
// input value array of items
// output maximum profit

const knapsack = (totalWeight, weight, value, n) => {
    if (n == 0 || totalWeight ==0 ) return 0;
    if (weight[n-1] < totalWeight) {
        return Math.max(value[n-1] + knapsack(totalWeight - weight[n-1], weight, value, n-1), knapsack(totalWeight, weight, value, n-1))
    } else {
        return knapsack(totalWeight, weight, value, n-1)
    }
}

console.log(knapsack(5, [1,2,3,4], [2, 3, 4, 1], 4))