"use strict";

const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scores = 20;
let highscores = 0;

checkBtn.addEventListener("click", () => {
  let guessedNumber = Number(guess.value);

  if (!guessedNumber) {
    message.textContent = "No number!";
  } else if (guessedNumber === secretNumber) {
    message.textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    number.style.width = "30rem";
    number.textContent = secretNumber;
    if (scores > highscores) {
      highscores = scores;
      highscore.textContent = highscores;
    }
  } else if (guessedNumber !== secretNumber) {
    if (scores > 1) {
      message.textContent =
        guessedNumber > secretNumber ? "Too High" : "Too low";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = "You lost the game";
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  scores = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "start guessing...";
  number.textContent = "?";
  score.textContent = scores;
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = " ";
});