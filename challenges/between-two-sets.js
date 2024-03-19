// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
  // find the range of ints I need checked
  let rangeBottom, rangeTop, result = []
  for(let i = 0; i < a.length; i++) {
    if (!rangeBottom || a[i] > rangeBottom) rangeBottom = a[i]
  }
  for(let i = 0; i < b.length; i++) {
    if (!rangeTop || b[i] < rangeTop) rangeTop = b[i]
  }
  // now we need to iterate through all ints in our range
  let tempArr = []
  for(let intBeingConsidered = rangeBottom; intBeingConsidered <= rangeTop; intBeingConsidered++) {
    // check if each element in a is a factor of intBeingConsidered and if it is store it in a temporary array
    let factor = true
    for(let j = 0; j < a.length; j++) {
      if (intBeingConsidered % a[j] !== 0) {
        factor = false
      }
    }
    if (factor) tempArr.push(intBeingConsidered)
  }

  for(let i = 0; i < tempArr.length; i++) {
    let divisible = true
    for(let j = 0; j < b.length; j++) {
      if (b[j] % tempArr[i] !== 0) {
        divisible = false
      }
    }
    if (divisible) result.push(tempArr[i])
  }

  console.log(result)
  return tempArr.length
}

getTotalX([2, 6], [24, 36])