// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, sockArr) {
  let sockCounter = {}
  let result = 0

  sockArr.forEach(sock => {
    if (sockCounter[sock]) {
      sockCounter[sock]++
    } else {
      sockCounter[sock] = 1
    }
  })


  for (let sock in sockCounter) {
    let pairs = Math.floor(sockCounter[sock] / 2)
    result = result + pairs
  }

  return result
}

// const socks = [1, 2, 1, 2, 1, 3, 2]

// sockMerchant(socks.length, socks)