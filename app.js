
var parent_url = 'http://q.invisiblefriend.com/data'
var http = require('http')
var es = require('event-stream')
var colors = require('colors')
var through = require('through')
var htmlParser = require('html-parser')
var grab = require('./TagGrabber')


http.get(parent_url, function(res) {
  res
    .pipe(es.split())
    .pipe(es.parse())
    .pipe(rts)
})




var rts = es.through(write)
  
function write(data) {
  
  console.log('------'.red)
  
  var val = JSON.parse(data.value)
  grab(val.url)
  
  console.log('------\n'.cyan)
}




// var http = require('http')
// var htmlParser = require('html-parser')

// http.get('http://cnn.com', function(res) {
	
// 	var head = null

// 	console.log('Got it!')


// 	res.on('data', function(chunk) {
// 		console.log(chunk)
// 	})

// }).on('error', function(e){
// 	console.log("Oops... got an error: " + e.message)
// })

// function parseIt(html){
// 	htmlParser.parse(html, {
// 		elements: [ 'head' ]
// 	})
// }
