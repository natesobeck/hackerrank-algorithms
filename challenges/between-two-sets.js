// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
  let result = []

  for (let i = 0; i < a.length; i++) {
    a.forEach(int => {
      if (a[i] % int === 0) {
        result.push(int)
      }
    })
    console.log(result)
  }
}

getTotalX([1, 2, 4], [60, 67, 89])