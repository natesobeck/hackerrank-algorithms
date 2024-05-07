// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, budget) {
  let result = -1
  keyboards.forEach(keyBoard => {
    if (keyBoard < budget) {
      drives.forEach(drive => {
        const total = drive + keyBoard
        if (total <= budget && total > result) {
          result = total
        }
      })
    }
  })
  return result
}