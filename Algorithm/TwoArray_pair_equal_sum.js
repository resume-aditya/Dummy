// Inputs
    // Num array 1 = [-1, 3, 8, 2, 9, 5]
    // Num array 2 = [4, 1, 2, 10, 5, 20]
    // Target sum = 24
// Output : return pair of number whose sum is closest to the target

// Answer : {3, 20} {5, 20}

// Iterate o


// Brute force

const closestPair = (numArray1, numArray2, targetSum) => {
    let topPair,topDeviance, secondTopPair, secondTopDeviance;
    for (let i=0; i<numArray1.length; i++) {
        for(let j=0; j<numArray2.length; j++) {
            let absoluteDeviance = Math.abs(numArray1[i] + numArray2[j] - targetSum)
            if (!topDeviance) {
                topDeviance = secondTopDeviance = absoluteDeviance;
            }
            if ( absoluteDeviance < topDeviance) {
                topPair = numArray1[i] + '-' + numArray2[j];
                topDeviance = absoluteDeviance
            } else if (absoluteDeviance < secondTopDeviance) {
                secondTopPair = numArray1[i] + '-' + numArray2[j];
                secondTopDeviance = absoluteDeviance
            }
        }
    }
    console.log('top pair : ', topPair)
    console.log('second top pair : ', secondTopPair)
}

closestPair([-1, 3, 8, 2, 9, 5], [4, 1, 2, 10, 5, 20], 24)
