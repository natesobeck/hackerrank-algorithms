// https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true

// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// 1. Append a lowercase English letter to the end of the string.
// 2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.

// Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.

/*

  1. Determine which the earliest character in t that is different from k. THi

  2. 

*/

function appendAndDelete(s, t, k) {
  const totalCharacters = s.length + t.length

  if (k >= totalCharacters) {
    return "Yes"
  } else {
    let numToDelete = 0
    let numToAppend = 0
    const longestString = s.length > t.length ? s.length : t.length

    for (let i = 0; i < longestString; i++) {
      if (s[i] !== t[i]) {
        numToDelete += s.length - i
        numToAppend += t.length - i
        break
      }
    }

    const minimumOperations = numToDelete + numToAppend

    if (k >= minimumOperations && (k - minimumOperations) % 2 === 0) {
      return 'Yes'
    }
  }

  return 'No'
}


console.log(appendAndDelete(["y"], ["y", "u"], 1))