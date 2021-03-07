// * variables for players
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

// * variables for dom elements
const message = document.querySelector('#message');

// * player one variables
const playerOne = document.querySelector('#player1');
const playerOneScoreboard = document.querySelector('#player1Scoreboard');
const playerOneDice = document.querySelector('#player1Dice');

// * player two variables
const playerTwo = document.querySelector('#player2');
const playerTwoScoreboard = document.querySelector('#player2Scoreboard');
const playerTwoDice = document.querySelector('#player2Dice');

// * buttons
const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');

// * functions

const resetGame = () => {
  // * update message
  message.style.color = 'black';
  message.textContent = 'Player One Turn';

  // * reset score and text content
  playerOneScoreboard.textContent = 0;
  playerTwoScoreboard.textContent = 0;
  player1Dice.textContent = '-';
  player2Dice.textContent = '-';
  playerOneScore = 0;
  playerTwoScore = 0;

  // * reset to player one
  playerOneTurn = true;

  // * remove and add shadow to player one
  playerTwoDice.classList.remove('active');
  playerOneDice.classList.add('active');

  // * reset button
  resetBtn.style.display = 'none';
  rollBtn.style.display = 'inline';
};

// * event listeners

rollBtn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  // * player turns

  // * player one conditional
  if (playerOneTurn) {
    // * get score
    playerOneScore += randomNumber;
    playerOneScoreboard.textContent = playerOneScore;
    player1Dice.textContent = randomNumber;
    // * remove shadow and add to player 2
    playerOneDice.classList.remove('active');
    playerTwoDice.classList.add('active');
    // * update message
    message.innerText = 'Player Two Turn';
  } else {
    // * get score
    playerTwoScore += randomNumber;
    playerTwoScoreboard.textContent = playerTwoScore;
    player2Dice.textContent = randomNumber;
    // * remove shadow and add to player 1
    playerOneDice.classList.add('active');
    playerTwoDice.classList.remove('active');
    // * update message
    message.innerText = 'Player One Turn';
  }

  if (playerOneScore >= 20) {
    message.innerText = 'Player One Wins';
    message.style.color = '#FF7F50';
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
  }

  if (playerTwoScore >= 20) {
    message.innerText = 'Player Two Wins';
    message.style.color = '#FF7F50';
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline';
  }
  playerOneTurn = !playerOneTurn;
});

resetBtn.addEventListener('click', () => {
  resetGame();
});
