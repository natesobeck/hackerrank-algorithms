// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {
	if (n % 2 === 0) {
		n += 1
	}
	let upper = n - p
	let lower = p
	let min = Math.min(upper, lower)
    
	return Math.floor(min / 2)
}

console.log(pageCount(37455, 29835))