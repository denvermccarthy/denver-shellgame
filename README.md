# denver's shellgame plan

1. Create HTML markup, include:
* a header that welcomes the user to the game
* three divs that contain 
  * A shell image
  * A button
  * a div with an id "red ball1-3" that has nothing in it, add a class but leave it empty 
* a div with an id of 'scoreboard' at the bottom that will keep track of our statistics (wins, losses, total tries, win/loss ratio if you get to it)
* set the text in the statistics div to "Press a button to start playing!"
* set empty spans inside result div with wins, losses, total and win-loss-ratio with id's respective to their result ex. wins becomes <span id="win"><span>

ACP!

2. create styles.css style elements so that they look how they should on the page

3. add a class of .reveal in css that renders a red circle inside the red ball div

4. test .reveal by adding the 'reveal' class to the div with the id of 'red ball'

ACP!

4. create app js and grab 
  * buttons 1-3
    * const button1, button2, button3 
  * the red ball div1 - 3
    const redBall1, redBall2, redBall3
  * the div that displays the results 
    * scoreBoardEl
  * spans inside result div with wins, losses and total 
    * winsEl , lossEl, totalEl, winLossRatio- set these as let variables and make them all equal to 0 

5. create a variable that 
  * queryselects all buttons (lets call it const anyButtons)
  * called let winCount that holds our win state
  * called let lossCount that holds our loss state
  * try let winLoss = winCount / lossCount


  ACP!

6. create an event listener that listens for an anyButtons clicked and triggers  
  * the amount of total times played (winCount + lossCount) OR try totalEl
  * we're going to have to set the text content in the div to ='' before we start displaying results
  * the function displayResults 

  anyButtons.eventListenerAdd('click, () => {
      scoreBoardEl.textContent = '';
      // you might need redBall.classList.remove('reveal')
      displayResults();
  });

ACP!

7. the function displayResults that will consider our states (wins and losses) and then update our 'wins', 'losses', 'win-loss-ratio'  
ex code
function displayResults() { 
  winsEl.textContent = winCount;
  lossEl.textContent =  lossCount;
  totalEl.textContent = winCount + lossCount;
  winLoss.textContent = winLossRatio;
}

ACP!

8. create an array called const choices = ['choice0','choice1','choice2']

9. create more eventListeners (one for each button ): these will
  * first we're going to create the user's choice for this game, generate a random number between 0 and 2 and store that in an answer variable 
  * 

  * example 
  button1.addEventListener ('click', => {
    let userGuess = Math.floor(Math.random() * 3)
    let answer = Math.floor(Math.random() * choice.length)
    checkLogic(userGuess, answer)
  })

  
 checkLogic (userGuess, answer) {
    if (userGuess === answer) {
      // update win count

  // go ask if you can create the answer 


 
    } else {
      //update loss count
    }


//switch statement for displaying red ball

for (i = 0; i < choices.length; i++) {
!!!-ask if i need let or const-!!! let showBall = choices[i];
switch (showBall) {
  case 'choice0': 
  case 'choice1'
  case 'choice2'
}
}


  //idea for displaying red ball
  if (answer === 0) {
      redBall1.classList.add('reveal')
    } else if (answer === 1) {
      redBall2.classList.add('reveal')
    } else {
      redBall3.classList.add('reveal')
    } 
  }
     