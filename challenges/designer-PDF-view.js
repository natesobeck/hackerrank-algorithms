// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

/*

1. Declare objectH variable and set it to {}, delare alphabet variable and set it to [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

2. Loop through the array of letter heights (h) and the alphabet array concurrently

3. For each index of the h array, add a key of alphabet[index] and a value of the letter height

4. With your newly constructed objectH, the problem becomes easy. Declare a totalHeight variable and set it to 0.

5. Loop through the letters in the word. If objectH[letter] > totalHeight, set totalHeight to objectH[letter]

6. Return totalHeight * word.length

*/

function designerPdfViewer(h, word) {
  const objectH = {}
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for(let i = 0; i < h.length; i++) {
    objectH[alphabet[i]] = h[i]
  }

  let totalHeight = 0

  for(let i = 0; i < word.length; i++) {
    if (objectH[word[i]] > totalHeight) {
      totalHeight = objectH[word[i]]
    }
  }

  return totalHeight * word.length
}