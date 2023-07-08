let player = {
  name: "Per",
  chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.innerHTML = player.name + " : $ " + player.chips;

function getRandomCard() {
  let cardNumber = Math.floor(Math.random() * 13) + 1;
  if (cardNumber === 1) return 11;
  else if (cardNumber > 10) return 10;
  else return cardNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.innerHTML = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " ";
  }
  sumEl.innerHTML = "SUM : " + sum;
  if (sum <= 20) {
    message = "do u want to draw aother card ? 😄 ";
  } else if (sum === 21) {
    message = "Blackjack! 😍 ";
    hasBlackJack = true;
  } else {
    message = "you're out of the game ! 🗿 ";
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function reset() {
  cards = 0;
  sum = 0;
  cardsEl.innerHTML = "Cards : ";
  sumEl.innerHTML = "Sum : ";
  messageEl.innerHTML = "Want to play a round ?";
}
