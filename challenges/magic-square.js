// https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
  let cost = 0

  if (s[1][1] !== 5) {
    cost = cost + Math.abs(s[1][1] - 5)
  }

  const corners = [s[0][0], s[0][2], s[2][0], s[2][2]]
  corners.forEach(corner => {
    let neededValues = [1, 3, 7, 9]
    let foundValues = []
    if (!neededValues.includes(corner)) {
      
    }
  })

  const cornerTotal = s[0][0] + s[0][2] + s[2][0] + s[2][2]

  if (cornerTotal !== 20) {
    cost = cost + Math.abs(cornerTotal - 20)
  }

  const middlesTotal = s[0][1] + s[1][0] + s[1][2] + s[2][1]

  if (middlesTotal !== 20) {
    cost = cost + Math.abs(middlesTotal - 20)
  }

  return cost
}

const myMagicMatrix = [
  [9, 9, 9],
  [9, 9, 9],
  [9, 9, 9]
]

formingMagicSquare(myMagicMatrix)