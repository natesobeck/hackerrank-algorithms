// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

function findDigits(n) {
  const nAsArray = n.toString().split('')

  let result = 0

  nAsArray.forEach(digit => {
    const num = Number(digit)
    if (num !== 0 && n % num === 0) result++
  })

  return result
}