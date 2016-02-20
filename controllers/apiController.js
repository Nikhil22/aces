var fun = require('../fun');
var fs = require('fs');

module.exports = function(app, dir) {

  app.get('/mostLikedPosts', function(req, res) {
      var mostLikedPostsJSON = fs.readFileSync(dir + '/mostLikedPosts.txt');
      res.send(mostLikedPostsJSON);
  });

  app.post('/index', function(req, res) {
    // Utility - clean up
    var responseObj = fun.utility.stringToObj(req.body.userPosts);
    var allPostsArray = fun.utility.getAllPosts(responseObj);
    allPostsArray['data'] = fun.utility.keepObjsInArrayBasedOnKey(allPostsArray, 'likes');
    allPostsArray['data'] = fun.utility.keepObjsInArrayBasedOnKey(allPostsArray, 'message');

    // Most liked Posts
    var mostLikedPosts = fun.mostLikedPosts.sortPostsByLikes(allPostsArray)

    fs.writeFileSync('mostLikedPosts.txt', JSON.stringify(mostLikedPosts.slice(0, 15)));

    res.sendFile(dir + '/public/views/index.html')
  });

}
