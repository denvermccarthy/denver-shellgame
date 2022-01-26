// //might not need
// // const button1 = document.getElementById('button1')
// // const button2 = document.getElementById('button2')
// // const button3 = document.getElementById('button3')

const redBall1 = document.getElementById('red-ball')
const redBall2 = document.getElementById('red-ball2')
const redBall3 = document.getElementById('red-ball3')


// // const redBalls = document.querySelectorAll('.redBall')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

// // anyButtons.addEventListener('click', )


// // anyButtons.addEventListener('click', function () {
// //   console.log('user clicked!');
// // });




// const anyButtons = document.getElementsByTagName('button')
const shells = ['shell0', 'shell2', 'shell2']
const scoreBoardEl = document.getElementById('scoreboard')


const winEl = document.getElementById('win')
const lossEl = document.getElementById('loss')
const totalEl = document.getElementById('counter')
const winLoss = document.getElementById('winloss')
 
let winCount = 0;
let lossCount = 0;

// console.log(anyButtons,answer);

// function playGame() {
//   let answer = Math.floor(Math.random() * 3)
//   if (answer = 0 && anyButtons.item(0).clicked == true) {
//     console.log('you won!');
//   } else {
//     console.log('not working');
//   }
//   return answer

// }

// anyButtons.item(0).addEventListener('click', playGame())

btn1.addEventListener('click', () => {
  const answer = Math.floor(Math.random() * 3)
  const userGuess = 0
  // console.log('console', answer, userGuess)
  playGame(answer, userGuess);
})

btn2.addEventListener('click', () => {
  const answer = Math.floor(Math.random() * 3) 
  const userGuess = 1
  playGame(answer, userGuess);
})

btn3.addEventListener('click', () => {
  const answer = Math.floor(Math.random() * 3)
  const userGuess = 2
  playGame(answer, userGuess);
})

function playGame(answer, userGuess) {
  if (answer === userGuess) {
    winCount++
    // winEl.textContent = 'Win: ' + winCount;
  } else {
    // console.log('fail')
    lossCount++
    // lossEl.textContent = 'Loss: ' + lossCount;
  }
// totalEl.textContent = 'Total: ' + (winCount + lossCount);
// winLoss.textContent = 'Win/Loss Percentage: ' + Math.round(winCount / lossCount) * 100;
  if (answer === 0) {
    redBall1.classList.add('reveal')
    redBall2.classList.remove('reveal')
    redBall3.classList.remove('reveal')
  } else if (answer === 1) {
    redBall2.classList.add('reveal')
    redBall1.classList.remove('reveal')
    redBall3.classList.remove('reveal')
  }else {
    redBall3.classList.add('reveal')
    redBall2.classList.remove('reveal')
    redBall1.classList.remove('reveal')
  }
updateScore();
// console.log('total', total);
};

console.log(winCount);

function updateScore() {
  winEl.textContent = 'Wins: ' + winCount;
lossEl.textContent = 'Losses: ' + lossCount;
totalEl.textContent = 'Total: ' + (winCount + lossCount);
function percent() {
  
};
winLoss.textContent = 'Win/Loss Percentage: ' + Math.round(winCount / lossCount * 100);

};