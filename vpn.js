const net = require('net')
const crypto = require('crypto')
const pw = 'acb123'

net.createServer(function (stream) {
	stream
	  .pipe(crypto.createDecipher('aes192', pw))
		.pipe(net.connect(5000, 'localhost'))
		.pipe(crypto.createCipher('aes192', pw))
		.pipe(stream)
}).listen(5005)
