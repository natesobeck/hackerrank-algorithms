// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
  let furthestStart = x1 > x2 ? x1 : x2
  let shortestStart = x1 > x2 ? x2 : x1
  let furthestStartVelocity = furthestStart === x1 ? v1 : v2
  let shortestStartVelocity = furthestStart === x1 ? v2 : v1

  if (furthestStartVelocity >= shortestStartVelocity) {
    return 'NO'
  } else {
    while (furthestStart > shortestStart) {
      furthestStart += furthestStartVelocity
      shortestStart += shortestStartVelocity

      if (furthestStart === shortestStart) {
        return 'YES'
      }
    }
  }
  return 'NO'
}

console.log(kangaroo(0, 2, 5, 3))