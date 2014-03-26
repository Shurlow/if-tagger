// tagger function
module.exports = function(html) {
	
	var tags = null;

	console.log('Getting tags from html') 

	// Somethings not right here. Weork on how to extract tags from html
	var metaWords = html.getElementsByTagName('meta').item(property='keywords')
	console.log(metaWords)

}
