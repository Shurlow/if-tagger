var http = require('http')

http.get('http://cnn.com', function(res) {
	console.log('Got it! code: ' + res.statusCode)
	console.log(res.headers)
	console.log(toString(res.body))
}).on('error', function(e){
	console.log("Oops... got an error: " + e.message)
})

console.log("wassup")