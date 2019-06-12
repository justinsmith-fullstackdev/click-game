# clicky-game

This app is a front-end game built with React.js. The goal is to click on each Game of Thornes character GIF only one time. There are 12 total GIFs that shuffle automatically on each click, making it more difficult for to remember which cards have not been clicked.

## Visit the site

Click the link to play the game: https://justinsmith-fullstackdev.github.io/click-game/ 



## How it works
* The user begins the game by clicking on a Character GIF
* After each click, React will shuffle the cards using an NPM package called Shuffle-Array and check if the user has selected theGIF before
* If they have, it will trigger an end game condition
* If they have not, it will increase the current score
* Upon game end, the app will update your highest score and reset the current score

## Technologies used
* React JS
