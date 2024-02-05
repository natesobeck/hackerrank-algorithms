// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  let roundedGrades = grades.map(grade => {
    if (grade < 38) {
      return grade
    } else {
      let nearestMultiple = grade + (5 - (grade % 5))
      if (nearestMultiple - grade < 3) {
        return nearestMultiple
      } else {
        return grade
      }
    }
  })
  return roundedGrades
}