// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(score) {
  const result = [0, 0]
  let lowestPointsInSeason = score[0], highestPointsInSeason = score[0]

  for(let i = 1; i < score.length; i++) {
    if (score[i] > highestPointsInSeason) {
      result[0]++
      highestPointsInSeason = score[i]
    }
    if (score[i] < lowestPointsInSeason) {
      result[1]++
      lowestPointsInSeason = score[i]
    }
  }

  return result
}