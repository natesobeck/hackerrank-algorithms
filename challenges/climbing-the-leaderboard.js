// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

/*

1. Initialize playerHighScore to 0, playerRankings to []

2. Loop through the array of player scores

3. For each score, loop through the ranks to find the index to insert the players score at (this index + 1 is the rank)

4. If the playerHighScore is greater than the current score in the loop, just continue. This will not affect the player's rank. 

5. If the playerHighScore is less than the current score in the loop, set the playerHighScore to this value, push the new rank to the playerRankings array

6. Add the new high score to the appropriate index

7. Find and remove the old high score

8. return the playerRankings array

*/

function climbingLeaderboard(ranked, player) {
  const playerRankings = []
  let playerHighScore = 0

  for(let i = 0; i < player.length; i++) {
    if (playerHighScore >= player[i]) {
      continue
    }
    console.log(player[i])
    if (playerHighScore < player[i]) {
      for (let j = 0; j < ranked.length; j++) {
        if (player[i] >= ranked[j]) {
          ranked = [...ranked.slice(0, j + 1), player[i], ...ranked.slice(j + 1)]
        }
      }
    }
  }
  console.log([...ranked.slice(0, 2), 90, ...ranked.slice(2)])
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])