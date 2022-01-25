//might not need
// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const button3 = document.getElementById('button3')

// const redBall1 = document.getElementById('red-ball1')
// const redBall2 = document.getElementById('red-ball2')
// const redBall3 = document.getElementById('red-ball3')

const redBalls = document.querySelectorAll('.redBall')
const anyButtons = document.querySelectorAll('button')
const scoreBoardEl = document.getElementById('scoreboard')

const winEl = document.getElementById('win')
const lossEl = document.getElementById('loss')
const counterEl = document.getElementById('counter')

let winCount = 0;
let lossCount = 0;

console.log('buttons ANY', anyButtons, 'scoreboard', scoreBoardEl, 'winlosscount spans', winEl, lossEl, counterEl, 'red balls', redBalls);