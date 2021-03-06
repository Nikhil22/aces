<h1>Aces</h1>

<h2>What is it?</h2>

<ol>
  <li>Discover your most liked Facebook posts, in a responsive, Pinterest style grid UI :)</li>
  <li>Filter your posts</li>
</ol>

<h2>Desktop</h2>

<p>
  <img src="https://github.com/Nikhil22/aces/blob/master/public/img/reel.png"/>
</p>

<h2>Mobile</h2>
<p>
  <img src="https://github.com/Nikhil22/aces/blob/master/public/img/reelmobile.png"/>
</p>

<h2>Things that can be improved</h2>
<ol>
<li>Change the httpGet function in fun/utility.js from synchronous to asynchronous, and use promises to control the flow</li>
<li>Load more content as user scrolls down</li>
<li>Displaying the thumbnail url previews for any images you share on Facebook relies on an 3rd party API Embedly. This thumbnail preview feature should be implemented 'in-house', AKA locally</li>
</ol>

<h5>These are the 3 main improvements I can think of. If you can think of more (surely, there are more improvements to be made), don't hesitate to add 'em to this list & contribute your code :) </h5>

<h2>How to use</h2>

<ol>
  <li>Clone this repo & install all dependencies</li> <br>
  <pre>cd aces</pre> <br>
  <pre>npm install</pre> <br>

  <li>Important! Make sure you have a Facebook App ID. <br> If you don't, visit https://developers.facebook.com.</li> <br>

  <li>
  Once you have your App ID, head over to <strong>public/js/fbLogin.js</strong> <br>

  Modify the following piece of code: <br> <br>

  <pre>FB.init({<br>
    appId      : 'Your APP ID here',<br>
    cookie     : true,  // enable cookies to allow the server to access<br>
                        // the session<br>
    xfbml      : true,  // parse social plugins on this page<br>
    version    : 'v2.2' // use version 2.2
  });</pre> <br> <br>
  </li>

   <li>
    Have 2 Terminal tabs open <br>
    In the first tab, run <pre>npm start</pre> <br>
    In the second tab, run <pre>nodemon server.js</pre>
   </li> <br>

   <li>Head over to http://localhost:8000/fb_login</li> <br>

   <h3>Note</h3> To make sure localhost is one of the allowed URLs for your Facebook app, do the following <br>

   <pre>In the Dashboard for your Facebook App: Go to Settings > Advanced <br> <br> Under <strong>Valid OAuth redirect URIs.</strong>, add http://localhost:8000/ <br> <br> Save changes
   </pre>

   <li>Click 'Login'</li> <br>
   <li>Grab a drink, sit back, and watch as your most liked Facebook posts fill your screen</li>
 </ol>

<h2>Technologies used</h2>

<ol>
  <li>NodeJS</li>
  <li>ReactJS</li>
  <li>ExpressJS</li>
  <li>Facebook Graph API</li>
  <li>Twitter Bootstrap</li>
  <li>SemanticUI</li>
</ol>
