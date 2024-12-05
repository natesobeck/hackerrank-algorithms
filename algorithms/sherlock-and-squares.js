// https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true

function squares(a, b) {
  const lowestRootInt = Math.ceil(Math.sqrt(a))
  const highestRootInt = Math.floor(Math.sqrt(b))

  return highestRootInt - lowestRootInt + 1
}