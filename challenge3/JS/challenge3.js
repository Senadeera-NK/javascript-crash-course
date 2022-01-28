function rpsGameFunction(yourChoice){
  //console.log(yourChoice.id);//we have reference/access to that object
 var humanChoice, botChoice;
 humanChoice = yourChoice.id;

 botChoice = numberToChoice(randomRpsInt());
result = decideWinner(humanChoice,botChoice);// [1,0],[0,1],[0.5,0.5]

message = finalMessage(result);//'you won'(returns an object)('message':'you won','color':'red')
console.log(message);
rpsFrontEnd(yourChoice,botChoice,message);//front end after human choice
}

function randomRpsInt(){
  return Math.floor(Math.random()*3);
}

function numberToChoice(number){
  return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
  var rpsDatabase = {
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'rock':0,'paper':1,'scissor':0.5}
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];//ex:- myChoice = 'rock', computerChoice = 'scissor','rock' => 'scissor' = 1;
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
  if(yourScore === 0){
      return {'message':'you lost!','color':'red'};
  }else if(yourScore === 0.5){
      return {'message':'you tied!','color':'yellow'};
  }else{
      return{'message':'you win!','color':'green'};
  }
}

function rpsFrontEnd(humanChoice,botChoice,finalMessage){
    var imagesDatabase = {
      'rock': document.getElementById('rock').src,
      'paper':document.getElementById("paper").src,
      'scissor':document.getElementById("scissor").src
    }
    console.log("botChoice: "+botChoice);
    console.log("humanChoice: "+humanChoice.id);

   //let's remove all the images
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissor').remove();

   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');

   humanDiv.innerHTML = "<img src='"+imagesDatabase[humanChoice.id]+"' style='box-shadow: 0 10px 50px rgb(46, 34, 156);'>";
   document.getElementById('flex-box-rps-div').appendChild(humanDiv);

   messageDiv.innerHTML = "<h1 style='color: "+finalMessage['color']+";'>"+finalMessage['message']+"</h1>"
   document.getElementById('flex-box-rps-div').appendChild(messageDiv);

   botDiv.innerHTML = "<img src='"+imagesDatabase[botChoice]+"' style='box-shadow: 0px 10px 50px rgba(243, 38, 24 ,1);'>"
   document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
