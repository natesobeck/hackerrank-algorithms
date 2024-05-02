// https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true

/*

1. declare height variable and set to 1, also cycles to 0

2. use a while loop (count < n)

3. For each loop iteration: 
  - if cycles % 2 === 0, multiply height by 2
  - otherwise, add 1 to height
  - add 1 to cycles

4. return height

*/

function utopianTree(n) {
  let height = 1
  let cycles = 0

  while (cycles < n) {
    if (cycles % 2 === 0 || cycles === 0) {
      height = height * 2   
    } else {       
      height++
    }
    cycles++   
  }

  return height
}