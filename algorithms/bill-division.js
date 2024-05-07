// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  const billTotal = bill.reduce((item, total) => {
    return total + item
  }, 0)

  const annaOwes = (billTotal - bill[k]) / 2
  if (b - annaOwes === 0) {
    console.log('bon appetit')
  } else {
    console.log(b - annaOwes)
  }
}

bonAppetit([3, 10, 2, 9], 1, 7)