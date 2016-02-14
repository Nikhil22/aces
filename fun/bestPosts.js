function sortPostsByLikes(responseObj) {
	var userPostsArray = responseObj['data'];

	return userPostsArray.sort(function(a, b) {
    	return b['likes']['summary']['total_count'] - a['likes']['summary']['total_count'];
    });
}

module.exports = {
	'sortPostsByLikes' : sortPostsByLikes
}
