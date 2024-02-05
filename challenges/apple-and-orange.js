// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0
  let orangeCount = 0

  apples.forEach(apple => {
    if (a + apple >= s && a + apple <= t) {
      appleCount++
    }
  })
  oranges.forEach(orange => {
    if (b + orange >= s && b + orange <= t) {
      orangeCount++
    }
  })

  console.log(appleCount)
  console.log(orangeCount)
}

console.log(countApplesAndOranges(4, 10, 2, 18, [4, -5, 7], [9, -10, 3]))