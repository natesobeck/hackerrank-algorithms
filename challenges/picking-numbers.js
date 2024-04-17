// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

/*

1. Define result variable and set to 0

2. Loop through each element in the array

3. For each element, store it in two temp arrays

4. Loop through the array again

5. If array[j] is one less than array[i] push it into the first temp array

6. If array[j] is one more than array[i] push it into the second temp array

7. Check the lengths of both temp arrays. If they are longer than result, set result = length of longest array

8. Return result

*/

function pickingNumbers(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    const tempArr1 = [array[i]]
    const tempArr2 = [array[i]]
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (array[i] === array[j] - 1 || array[i] === array[j]) {
          tempArr1.push(array[j])
        } else if (array[i] === array[j] + 1 || array[i] === array[j]) {
          tempArr2.push(array[j])
        }
      }
    }
    if (tempArr1.length > result) {
      result = tempArr1.length
    }
    if (tempArr2.length > result) {
      result = tempArr2.length
    }
  }
  return result
}

const array = [1, 1, 2, 2, 4, 4, 5, 5, 5]
console.log(pickingNumbers(array))