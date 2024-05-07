// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps, path) {
  let level = 0
  let result = 0

  for(let i = 0; i < path.length; i++) {
    if (level === 0 && path[i] === 'D') {
      result++
    }
    if (path[i] === 'D') {
      level--
    } else {
      level++
    }
  }

  return result
}

countingValleys(8, 'DDUUUUDDDU')