// https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true

/*

1. let result = []

2. Use a for loop to loop from x = 1 to the length of the provided array

3. For each loop:
  - const y = array.indexOf(x) + 1
  - push y to the result array

4. return result

*/

function permutationEquation(array) {
  let result = []
  let objArray = {}

  for(let x = 1; x <= array.length; x++) {
    objArray[array[x - 1]] = x
  }

  for(let x = 1; x <= array.length; x++) {
    const y = objArray[objArray[x]]
    result.push(y)
  } 

  return result
}