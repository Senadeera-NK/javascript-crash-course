var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
 for(let i=0;i < all_buttons.length;i++){
   copyAllButtons.push(all_buttons[i].classList[1]);
 }
 console.log(copyAllButtons);

//main function
function buttonColorChange(buttonThingy){
 console.log(buttonThingy.value); //.value -> to get the value of the option
 if(buttonThingy.value === 'red'){
   buttonsRed();
 }else if(buttonThingy.value === 'green'){
    buttonsGreen();
 }else if(buttonThingy.value === 'reset'){
    buttonColorReset();
}
else if(buttonThingy.value === 'random'){
    randomColors();
}
}

 function buttonsRed(){
   for(let i = 0;i < all_buttons.length;i++){
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-danger');
   }
 }

 function buttonsGreen(){
  for(let i = 0;i < all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
 }
 
 function buttonColorReset(){
   for(let i = 0; i < all_buttons.length;i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);

      all_buttons[i].classList.add(copyAllButtons[i]);
   }
 }