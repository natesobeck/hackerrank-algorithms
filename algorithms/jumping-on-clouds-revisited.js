// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true

function jumpingOnClouds(c, k) {
  let jumpCount = 0
  let thundercloudCount = 0
  let index = 0

  do {
    jumpCount++
    if (c[index % c.length] === 1) {
      thundercloudCount++
    }
    index += k
  } while (index % c.length !== 0)

  const energyCost = jumpCount + (thundercloudCount * 2)
  return 100 - energyCost
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2))