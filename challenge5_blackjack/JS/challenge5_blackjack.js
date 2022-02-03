document.querySelector('#blackjack-hit-button').addEventListener('click',BlackJackHit);//CSS selector(dont have to use onclick i nhtml)

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
let BlackJackGame = {
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0}, //# is important
  'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0}, //#is important
  'cards':['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
};

const YOU = BlackJackGame['you'];
const DEALER = BlackJackGame['dealer'];

const hitSound = new Audio('SOUNDS/swish.m4a')

function BlackJackHit(){
  let card = randomCard();
  console.log(card);
   showCard(DEALER);
}

function showCard(activePlayer){
  console.log(activePlayer['div'])
  cardImage = document.createElement('img');
  cardImage.src = 'IMAGES/Q.png';
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal(){
  let yourImages = document.querySelector('#your-box').querySelectorAll('img'); //to get all images in id:your-box
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img'); //to get all images in id:your-box
  for(let i =0;i < yourImages.length;i++){
      yourImages[i].remove();
  }
  for(let i =0;i < dealerImages.length;i++){
    dealerImages[i].remove();
  }
}

function randomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return BlackJackGame['cards'][randomIndex];
}