document.querySelector('#blackjack-hit-button').addEventListener('click',BlackJackHit);//CSS selector(dont have to use onclick i nhtml)

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);


let BlackJackGame = {
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0}, //# is important
  'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0}, //#is important
  'cards':['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'],
  'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
  'wins':0,
  'losses':0,
  'draws':0
};

const YOU = BlackJackGame['you'];
const DEALER = BlackJackGame['dealer'];

const hitSound = new Audio('SOUNDS/swish.m4a')
const winSound = new Audio('SOUNDS/cash.mp3')
const lossSound = new Audio('SOUNDS/aww.mp3')

function BlackJackHit(){
  let card = randomCard();
  console.log(card);
  showCard(card,YOU);
  updateScore(card,YOU);
  showScore(YOU);
}

function randomCard(){
  let randomIndex = Math.floor((Math.random()*13)+1);
  return BlackJackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
  if(activePlayer['score'] <= 21){
    console.log(activePlayer['div'])
    cardImage = document.createElement('img');
    cardImage.src = `IMAGES/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal(){
  // showResult(computeWinner());  #maybe for two players put there
  let yourImages = document.querySelector('#your-box').querySelectorAll('img'); //to get all images in id:your-box
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img'); //to get all images in id:your-box
  for(let i =0;i < yourImages.length;i++){
      yourImages[i].remove();
  }
  for(let i =0;i < dealerImages.length;i++){
    dealerImages[i].remove();
  }
  YOU['score'] = 0;
  DEALER['score'] = 0;
  document.querySelector('#your-blackjack-result').textContent = 0;
  document.querySelector('#your-blackjack-result').style.color = 'white';

  document.querySelector('#dealer-blackjack-result').textContent = 0;
  document.querySelector('#dealer-blackjack-result').style.color = 'white';

  document.querySelector('#blackjack-result').textContent = "Let's play";
  document.querySelector('#blackjack-result').style.color = "black";

}

function updateScore(card,activePlayer){
  // if adding 11 keeps me below 21 add 11, otherwise add 1
  if(card==='A'){
    if(activePlayer['score']+BlackJackGame['cardsMap'][card][1] <= 21){
       activePlayer['score'] += BlackJackGame['cardsMap'][card][1];
    }else{
      activePlayer['score'] += BlackJackGame['cardsMap'][card][0];
    }
  }else{
    activePlayer['score'] += BlackJackGame['cardsMap'][card];
  }
}

function showScore(activePlayer){
  if(activePlayer['score'] > 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
    document.querySelector(activePlayer['scoreSpan']).style.color = "red";
  }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

//----------------adding another player---------------//
function dealerLogic(){
  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);
  if(DEALER['score'] > 15){
   let winner = computeWinner();
   showResult(winner);
  }
}

//compute winner and return who just won the game
//update the wins/losses/draws
function computeWinner(){
  let winner;
  if(YOU['score'] <= 21){
    //condition : higher score than dealer or when dealer busts bot you're 21
    if((YOU['score'] > DEALER['score']) || (DEALER['score'] > 21)){
        BlackJackGame['wins'] += 1;
        winner = YOU;
    }else if(YOU['score'] < DEALER['score']){
        BlackJackGame['losses'] += 1;
        winner = DEALER;
    }else if(YOU['score'] === DEALER['score']){
        BlackJackGame['draws'] += 1;
    }

    //condition: when user busts but dealer doesn't
    }else if(YOU['score'] > 21 && DEALER['score'] <= 21){
      BlackJackGame['losses'] += 1;
      winner = DEALER;

    //when you both busts
    }else if(YOU['score'] > 21 && DEALER['score'] > 21){
      BlackJackGame['draws'] += 1;
    }
  
  console.log(BlackJackGame);
  return winner;
}

function showResult(winner){
  let message, messageColor;
  if(winner === YOU){
    document.querySelector('#wins').textContent = BlackJackGame['wins'];
    message='You won !';
    messageColor='green';
    winSound.play();
  }else if(winner === DEALER){
    document.querySelector('#losses').textContent = BlackJackGame['losses'];
    message='You lost !';
    messageColor='red';
    lossSound.play();
  }else{
    document.querySelector('#draws').textContent = BlackJackGame['draws'];
    message='You drew !';
    messageColor='black';
  }

  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
}













