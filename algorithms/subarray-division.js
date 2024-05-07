// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

// function birthday(s, d, m) {
//   let result = 0
//   let segment

//   for(let i = 0; i < s.length - m + 1; i++) {
//     segment = s.slice(i, i + m)
//     let total = segment.reduce((total, currentValue) =>
//     total + currentValue
//     , 0)
//     if (total === d) result++
//   }

//   return result
// }

function birthday(s, d, m) {
  let result = 0
  let firstSegment = s.slice(0, m)
  let total = firstSegment.reduce((total, currentValue) =>
  total + currentValue
  , 0)
  if (total === d) result++

  for(let i = 1; i < s.length - m + 1; i++) {
    total = total - s[i - 1] + s[i + m - 1]
    if (total === d) result++
  }

  return result
}

// console.log(birthday([0, 1, 2, 4, 4, 4], 8, 2))