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