// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//* Example


// Return '12:01:00'.


// Return '00:01:00'.

//* Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

//* Constraints

// All input times are valid

function timeConversion(s) {
  const splitTime = s.split(':')
  let hours = splitTime[0]
  let minutes = splitTime[1]
  let seconds = splitTime[2].slice(0, 2)
  let amPm = splitTime[2].slice(2)
  if (hours === '12' && amPm === 'AM') {
    hours = '00'
  } 
  if (amPm === 'PM' && hours !== '12') {
    hours = (parseInt(hours) + 12).toString()
  }
  return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion('12:00:00PM'))