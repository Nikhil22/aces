var fun = require('../fun');
var fs = require('fs');

module.exports = function(app, dir) {

  app.get('/bestPosts', function(req, res) {
      var bestPostsJSON = fs.readFileSync(dir + '/bestPosts.txt');
      res.send(bestPostsJSON);
  });

  app.post('/index', function(req, res) {
    // Utility - clean up
    var responseObj = fun.utility.stringToObj(req.body.userPosts);
    var allPostsObj = fun.utility.getAllPosts(responseObj);
    allPostsObj['data'] = fun.utility.keepObjsInArrayBasedOnKey(allPostsObj, 'likes');
    allPostsObj['data'] = fun.utility.keepObjsInArrayBasedOnKey(allPostsObj, 'message');

    // Most liked Posts
    var mostLikedPosts = fun.bestPosts.sortPostsByLikes(allPostsObj)

    fs.writeFileSync('bestPosts.txt', JSON.stringify(mostLikedPosts.slice(0, 15)));

    res.sendFile(dir + '/public/views/index.html')
  });

}
