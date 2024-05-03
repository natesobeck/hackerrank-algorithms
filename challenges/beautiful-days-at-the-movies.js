// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true

/*

1. let beautifulDays = 0

2. Loop through each number in the range with a for loop starting at i and ending at j

3. For every loop, you must first reverse the number. Do this by:
  - Changing the number to a string
  - Call string.reverse() on this new number string
  - let reverse = parseInt(newly reversed string)

4. If |number - reverse| % k === 0, the day is a beautiful day. Add one to beautifulDays

5. return beautifulDays

*/

function beautifulDays(rangeMin, rangeMax, beautifulNum) {
  let beautifulDays = 0

  for (let i = rangeMin; i <= rangeMax; i++) {
    let reverseNum = parseInt(i.toString().split('').reverse().join(''))
    if (Math.abs(i - reverseNum) % beautifulNum === 0) {
      beautifulDays++
    }
  }

  return beautifulDays
}

console.log(beautifulDays(20, 23, 6))