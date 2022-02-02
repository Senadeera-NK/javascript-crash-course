document.querySelector('#blackjack-hit-button').addEventListener('click',BlackJackHit)//CSS selector(dont have to use onclick i nhtml)

let BlackJackGame = {
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0}, //# is important
  'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0} //#is important
};

const YOU = BlackJackGame['you'];
const DEALER = BlackJackGame['dealer'];

const hitSound = new Audio('SOUNDS/swish.m4a')

function BlackJackHit(){
  console.log(YOU['div'])
  cardImage = document.createElement('img');
  cardImage.src = 'IMAGES/Q.png';
  document.querySelector(YOU['div']).appendChild(cardImage);
  hitSound.play();
}