
var parent_url = 'http://q.invisiblefriend.com/visits'
var es = require('event-stream')
// var colors = require('colors')
// var through = require('through')
var http = require('http')
var tagger = require('./tagger')



http.get(parent_url, function(res) {
  res
    .pipe(es.split())
    .pipe(es.parse())
    // .pipe(es.through(extractURLs))
    .pipe(es.through(addTags))

})	

  
// function extractURLs(visit) {
  
//   console.log('------'.red)

  
//   var newUrl = visit.value
 
//  	// console.log(newUrl)
//  	// console.log(typeof(newUrl))
  
//  	visit.urls = ['Url goes here', 'and another one here']

//  //  getHTML(newUrl, function(html){

//  //  	// now that we have the html we can use the tagger module to grab all tags
//  //  	console.log('Getting tags from html: ' + newUrl) 
// 	// tags = tagger(html)

//  //  })
  
//   console.log('------\n'.cyan)
// }


function addTags(visit) {
	// visit.tags = ['tag 1','tag 2']
	// console.log(visit)

	tags = tagger(visit)
}


// function getHTML(url, cb) {

// 	// temporary check for https.
// 	if (_url.parse(url).protocol == 'https:') return false;

// 	http.get(url, function(res) {
// 		res.on('data', function(data) {

// 			cb(data.toString())

// 		})

// 	}).on('error', function(err) {
// 		console.log('http error' + err)
// 	})

// }

