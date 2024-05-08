// https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true

/* 

1.  let result, countFromStart

2.  if (m > n) {
      countFromStart = m % n
    }

3.  result = countFromStart + s

4.  if (result > n) {
      result = result - n
    }

5. return result

*/

function saveThePrisoner(n, m, s) {
  let result, countFromStart

  if (m > n) {
    countFromStart = m % n - 1
  } else {
    countFromStart = n
  }

  result = countFromStart + s

  if (result > n) {
    result -= n
  }


  return result
}

saveThePrisoner(352926151, 380324688, 94730870)

let m = 380324688
let n = 352926151
let s = 94730870

let count = m % n - 1
let result = count + s
console.log(result)
122129406