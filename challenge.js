const fs = require('fs')
const split = require('split2')
const through = require('through2')

const r = fs.createReadStream('text.txt')

let counter = 0
r.pipe(split(/\s+/))
  .pipe(through(write, end))
		
		
function write (buf, enc, next) {
	counter++
	next()
}

function end(next) {
	console.log({counter})
	next()
}

