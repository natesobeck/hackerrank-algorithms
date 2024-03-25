// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
  const birdCount = {}
  let highCount = 1
  let result
  
  arr.forEach(birdId => {
    if (birdCount[birdId]) {
      birdCount[birdId]++
      if (highCount < birdCount[birdId]) {
        highCount = birdCount[birdId]
      }
    } else {
      birdCount[birdId] = 1
    }
  })

  for(let birdId in birdCount) {
    if (birdCount[birdId] === highCount) {
      if (!result || result > birdId) {
        result = birdId
      }
    }
  }

  return result
}