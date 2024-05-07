//* Staircase detail

// This is a staircase of size n = 4:

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

//* Input Format

// A single integer, n, denoting the size of the staircase.

//* Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log((' '.repeat(n - 1 - i)).concat('#'.repeat(i + 1)))
  }
}