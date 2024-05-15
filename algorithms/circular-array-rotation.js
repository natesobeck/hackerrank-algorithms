// https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true

/*

1. let result = []

2. if k > a.length, you can simplify it by setting it to k % a.length

3. If k === 0, the array does not need to be rotated, you can loop through each query and push a[query] to the result array

4. Else:
  - let rotatedArray = [...a.slice(a.length - k), ...a.slice(0, a.length - k)]
  - loop through the queries array
  - for each query, push rotatedArray[query] to the result array

5. return result

*/

function circularArrayRotation(a, k, queries) {

  if (k < 0) {
    return 'Number of rotations must be a positive integer'
  }

  let result = []

  if (k > a.length) {
    k = k % a.length
  }

  if (k === 0) {
    queries.forEach(query => {
      result.push(a[query])
    })
  } else {
    const rotatedArray = [...a.slice(a.length - k), ...a.slice(0, a.length - k)]
    queries.forEach(query => {
      result.push(rotatedArray[query])
    })
  }
  
  return result
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))