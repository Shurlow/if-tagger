// tagger function

var _url = require('url')
var http = require('http')
var colors = require('colors')


module.exports = function(visit) {

	console.log('Start Tag Finder ---------------------------------------------------------------------' + '\n' + '\n')
	
	var tags = null;

	var url = visit.value

	// console.log(url)

	getHTML(url, function(html){
		extractTags(html)
	})

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

function extractTags(html) {

	htmlStr = ''

	start = html.indexOf('keywords')
	end = html.indexOf('>', start)
	
	if(start != -1) {
		console.log(start + ' to ' + end)
		htmlStr = html.substring(start,end)

		console.log('YOOOOOOOOO'.blue)
		console.log(htmlStr)
	}


}
