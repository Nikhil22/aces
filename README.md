<h1>Aces</h1>

<h2>What</h2>

1. Get your most liked Facebook posts all in a responsive, Pinterest style grid layout :)
2. Filter your posts

<h2>Desktop</h2>
![alt tag](https://github.com/Nikhil22/aces/blob/master/public/img/reel.png)

<h2>Mobile</h2>
![alt tag](https://github.com/Nikhil22/aces/blob/master/public/img/reelmobile.png)

<h2>How to use</h2>

1. Clone this repo
2. cd into aces. 'cd aces'
3. 'npm install'

4.
  Important! Make sure you have a Facebook App ID.
  If you don't, visit https://developers.facebook.com.

5.
  Once you have your App ID, head over to public/js/fb-magic.js

  Modify the following piece of code:

  FB.init({
    appId      : '<Your APP ID here>',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

6.
    Have 2 Terminal tabs open
    In the first tab, run 'npm start'
    In the second tab, run 'nodemon server.js'

7. Head over to 'http://localhost:8000/fb_login'
8. Click 'Login'
9. Grab a drink, sit back, and watch as your most liked Facebook posts fill your screen

<h2>Technologies used<h2>

1. NodeJS
2. ReactJS
3. Facebook Graph API
