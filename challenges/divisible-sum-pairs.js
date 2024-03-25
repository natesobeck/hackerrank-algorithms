// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

/*
1. Set up variables:
  - declare result and set to 0

2. Sort the array of integers in ascending order

3. Loop through the array of integers

4. For each integer, loop through the array again starting at i+1

5. Create a pair with [array[i], array[j]]

6. The first condition, because it was initially sorted, is always true (i < j). So we only need to check the remaining condition. Add the values of the pairs and set it to a pairTotal variable. If pairTotal % int === 0, add 1 to result

7. return the result
*/ 

function divisibleSumPairs(arrLength, int, arr) {
  let result = 0
  let sortedArr = arr.sort((a, b) => a - b)
  let remainders = {}

  for (let i = 0; i < sortedArr.length; i++) {
    if (remainders[sortedArr[i]]) {
      remainders[sortedArr[i]]++
    } else {
      remainders[sortedArr[i]] = 1
    }
  }

  console.log(remainders)

  // for (let i = 0; i < sortedArr.length; i++) {
  //   for (let j = i + 1; j < sortedArr.length; j++) {
  //     const pairSum = sortedArr[i]+ sortedArr[j]
  //     if (pairSum % int === 0) {
  //       result++
  //     }
  //   }
  // }

  return result
}

divisibleSumPairs(6, 5, [2, 4, 6, 5, 3])

