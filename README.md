# github flow lab

## topics
 - JavaScript
 - Git and Github
 - using the in-browser console
 - Chrome developer tools

## to do - github flow

1. Find a partner (someone you don’t know too well!)
2. Fork my repository (ONLY ONE IN THE PAIR SHOULD DO THIS)
3. Add the partner who has not forked the repo as a collaborator (settings)
4. Clone your new copy of the repository
5. Checkout a branch called answers
6. Solve the practice problems together (more instructions below!)
7. Add your changes
8. Commit your changes
9. Push the branch up to Github
10. Merge the master with your answers branch
11. Have the partner who was added as a collaborator clone the freshly updated repo
12. High five

## lab instructions
Using data from [Open Notify](http://open-notify.org/), let's find out about the six astronauts in space right now! In spaceData.js, there is a constant, peopleInSpace, with a value of an object. The object is the response from a GET request to http://api.open-notify.org/astros.json. (If some of these terms are unfamiliar, that's okay! Visit the previous link to see for yourself what's happening.) You'll be using this data to return select information from this response object. Later on, we'll dig more into accessing data and rendering it to the DOM.  

Before you start, notice that index.html file? What's going on in there? Check it out! You can see the static text in that index.html file by simply opening the page in browser. (Give it a shot if you'd like.) But we're going to be writing JavaScript in this lab, so simply viewing the static file won't do.

1. paste ```python -m SimpleHTTPServer 8000``` into Terminal to start a local server. This will allow us to run JavaScript in a development environment in the browser.  
2. Navigate to http://localhost:8000/ in Chrome.
3. Now open the developer console (OPTION + COMMAND + J), and check out what's going on in there. See the logged object to the console? Click the down arrow to see the data within the object. Find the origin of that log by reading the filename and line of code in upper right corner of the log.  
4. Now complete the problems within practice.js. Check your console to make sure everything's working as expected!
