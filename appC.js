
//declearing variables (game elements)
let firstCard = randomIntFromInterval(2, 11);//first random card
let secondCard = randomIntFromInterval(2, 9);//second randomo card
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

//getting elements from index.html and declearing them
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardEl = document.getElementById("card-el");
let startBtn = document.getElementById("startBtn");
let newCardBtn = document.getElementById("newCardBtn");

//an arrow function which adds animation after we win the blackjack
const animation = () => {
  messageEl.classList.add("horizTranslate");
  //takes a animation that is on style.css with name #message-el.horizTranslate
}

//function to restart the game
function restart() {
  //this function restarts the page 
  location.reload();
}

//function to generate a ranodm number
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
  //returning a random int as cardnumber
}

function startGame() {
  //displaying the cards on the screen
  cardsEl.textContent = "Cards: |" + firstCard + "| |" + secondCard + "|";
  //displaying the sum of two card on the screen
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) 
  {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } 
  else if (sum === 21) 
  {
    message = "You've got Blackjack!";
    animation();
    hasBlackJack = true;
    isAlive = true;
  } 
  else if (sum >= 22) 
  {
    message = "You're out of the game!";
    isAlive = false;
    if (isAlive == false && hasBlackJack == false) 
    {
      setTimeout(() => restart(), 4500);
    }
  }
  //the message is gonna be printed the way if statement returns it
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and givint it a random value from 1 to 11
  let nextCard = randomIntFromInterval(2, 11);
  // 2. Adding the new card to the sum variable
  cardEl.textContent = "NewCard: |" + nextCard + "| ";
  console.log("The next card is generated with value : "+ nextCard);
  sum = sum + nextCard;
  // 3. Calling startGame() function so that the games countinues
  startGame();
}

//This is a very small JavaScript project to test my beginner JavaScript skills
//Thansks for having a look at my code :)

//www.eniskastrati.de
//www.github.com/eniskastrati