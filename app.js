document.body.style.zoom="110%"
let firstCard = randomIntFromInterval(2,11)
let secondCard = randomIntFromInterval(2,9)
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardEl = document.getElementById("card-el");

const animation = () => {
    messageEl.classList.add('horizTranslate');
}; 
//function to restart the game
function restart(){
    location.reload(); 
}

//function to generate a ranodm number
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function startGame() {
	cardsEl.textContent ="Cards: |" +firstCard +"| |"+ secondCard+"|";
	sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        animation();
        hasBlackJack = true;
    } else if(sum >= 22){
        message = "You're out of the game!"
		isAlive = false;
        if(isAlive == false){
            setTimeout(()=> restart(),4000);
        }
    }
	messageEl.textContent = message;
}


function newCard() {
    
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
	let nextCard = randomIntFromInterval(2,11)
    // 2. Add the new card to the sum variable
    cardEl.textContent = "NewCard: |"+ nextCard+"|";
	sum = sum + nextCard;
	// 3. Call startGame()
	startGame();
}

