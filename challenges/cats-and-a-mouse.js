// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {
  const catADistance = Math.abs(x-z)
  const catBDistance = Math.abs(y - z)

  if (catADistance < catBDistance) {
    console.log('Cat A')
  } else if (catADistance > catBDistance) {
    console.log('Cat B')
  } else {
    console.log('Mouse C')
  }
}