
var http = require('http')
var URL = require('url')

module.exports = function(url) {
	
	console.log('Got some tags from: '+ url) 

	// no https yet buck'o
	if (URL.parse(url).protocol == 'https:') {
		return
	}

	// console.log('GOT THROUGH')
	
	http.get(url, function(res) {
	
		console.log('YOOOOOOOOOO')
	
		res.on('error', function(err){
			console.log("shitty error")
		})
		
	}).on('error', function(err) {
		console.log('http error' + err)
	})

}


