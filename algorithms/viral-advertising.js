// https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true

/*

1. let totalAdLikes = 0, let count = 0, let shares = 5

2. while (count < n), execute the following code:
  - let likes = Math.floor(shares / 2)
  - totalAdLikes += likes
  - shares = likes * 3
  - count += 1

3. return totalAdLikes

*/

function viralAdvertising(n) {
  let totalAdLikes = 0
  let count = 0
  let shares = 5

  while(count < n) {
    let likes = Math.floor(shares/2)
    totalAdLikes += likes
    shares = likes * 3
    count += 1
  }

  return totalAdLikes
}