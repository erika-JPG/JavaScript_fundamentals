'use strict';

let score = [];
let currentScore = 0;
let activePlayer = 0;
let play = true;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

// Rolls a dice 1-6
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (play) {
    // Generates a number between 1-6
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log('Number Generated: ' + dice);
    // Displays dice image
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    if (dice !== 1) {
      // Add dice to current score of active player and displays it
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore);
    } else {
      // Switch player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (play) {
    score[activePlayer] = Number(
      document.getElementById(`score--${activePlayer}`).textContent
    );
    console.log(score[activePlayer]);
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 50) {
      play = false;
      document.querySelector('.dice').classList.add('hide');
      console.log(`player ${activePlayer + 1} won`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
    // Switch players
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

// Resets the game
document.querySelector('.btn--new').addEventListener('click', function () {
  // Set intial player back to 0
  score = [];
  currentScore = 0;
  activePlayer = 0;
  play = true;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');

  // set play to true
  // set score back to empty array
  // set a
});
