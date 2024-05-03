// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

/*

1. Declare onTimeStudents variable and initialize to 0

2. Loop through the strudentInTimes array

3. For each in time, if the in time is <= 0, add one to onTimeStudents

4. Otherwise, just continue

5. If onTimeStudents >= threshold, the class will go on and return 'YES', else return 'NO'

*/

function angryProfessor(threshold, studentInTimes) {

  let onTimeStudents = 0

  studentInTimes.forEach(inTime => {
    if (inTime <= 0) {
      onTimeStudents++
    }
  })

  return (onTimeStudents >= threshold ? 'YES' : 'NO')
}

console.log(angryProfessor(4, [-2, 1, 0, 1, 2]))