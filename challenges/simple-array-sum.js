// Given an array of integers, find the sum of its elements.

//* Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

//* Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.

//* Constraints

// 0 < n, ar[i] < 1000

function simpleArraySum(ar) {
  const total = ar.reduce((total, num) => {
    return total += num
  }, 0)
  return total
}

// console.log(simpleArraySum([1, 2, 3, 4]))