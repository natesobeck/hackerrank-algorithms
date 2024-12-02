// https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true

function extraLongFactorials(n) {
  if (n <= 0) return "Please enter a positive non-zero number"

  let result = 1n
  for (let i = n; i > 0; i--) {
    result *= BigInt(i)
  }
  
  return result
}

console.log(extraLongFactorials(100))