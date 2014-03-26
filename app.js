
var parent_url = 'http://q.invisiblefriend.com/data'
var http = require('http')
var es = require('event-stream')
var colors = require('colors')
var through = require('through')
var htmlParser = require('html-parser')
var tagger = require('./tagger')
var _url = require('url')


http.get(parent_url, function(res) {
  res
    .pipe(es.split())
    .pipe(es.parse())
    .pipe(es.through(extractURLs))

})

  
function extractURLs(data) {
  
  console.log('------'.red)
  
  var newUrl = JSON.parse(data).url
 
  getHTML(newUrl, function(html){

  	// now that we have the html we can use the tagger module to grab all tags
	tagger(html)

  })
  
  console.log('------\n'.cyan)
}


function getHTML(url, cb) {

	// temporary check for https.
	if (_url.parse(url).protocol == 'https:') return false;

	http.get(url, function(res) {
		res.on('data', function(data) {

			cb(data.toString())

		})

	}).on('error', function(err) {
		console.log('http error' + err)
	})

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
