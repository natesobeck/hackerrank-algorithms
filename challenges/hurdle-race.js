// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

/*

1. declare highestHurdle and instantiate it to 0

2. Loop through the array of hurdle heights

3. If the hurdleheight is bigger than the highest hurdle, set highestHurdle to this number

4. To determine how many potions are needed, if the highest hurdle is shorter than the natural jump height (k), return 0. Else, return highestHurdle - k

*/

function hurdleRace(k, height) {
  let highestHurdle = 0

  height.forEach(hurdleHeight => {
    if (hurdleHeight > highestHurdle) {
      highestHurdle = hurdleHeight
    }
  })

  if (highestHurdle < k) {
    return 0
  } else {
    return highestHurdle - k
  }
}