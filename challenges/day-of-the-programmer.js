// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
  let leapYear = false
  let result
  if (year === 1918) {
    result = "26.09.1918"
    return result
  } else if (year < 1918) {
    if (year % 4 === 0) {
      leapYear = true
    }
  } else {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
      leapYear = true
    }
  }

  leapYear ? result =  `12.09.${year}` : result = `13.09.${year}`
  return result
}