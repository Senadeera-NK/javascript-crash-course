//-----first step------//
//****console.log("hello");****///

//-----second step-------//
//variables
//**** var b = 'smoothies'; *****//
//**** console.log(b); *****//

//**** var someNumber = 45; *****//
//**** console.log(someNumber); *****//

//can change attached HTML page elements
//***** document.getElementById("someText").innerHTML="someText"; ****//

//ask something from user
//*** prompt("what is your age?");***//

//to do something with the user insert variable in the prompt
//**** var age = prompt("what is your age?"); ****//
//**** document.getElementById("someText").innerHTML=age; *****//

//numbers in javascript
//increment/ decrement by any number you want
//**** var num1 = 40; ****//
//**** num1 +=10; ****//
//**** console.log(num1); //num1 is increased by 10 


//--------functions----------//
/*1.creating the function */
function fun() {
  console.log('this is a function');
}
/*2.calling the function */
fun();

//lets create a function thats take a name and returns to you and says 'hello' followed by your name.
//ex: 'hello cassie'

function greeting(){
   var name = prompt('what is your name?'); 
  var result = 'Hello '+name; //string concatenation
  console.log(result);
}
// greeting();

//function with arguments - adding two numbers
function sumNumbers(num1, num2){
  var result = num1 + num2;
  console.log(result);
}
sumNumbers(12,10);


//-------while loops--------//
// *** var num = 0;
// *** while(num < 100){
//  *** num += 1;
// *** console.log(num);
// ***}
//------for loops-----------//
// *** for(let num = 0; num <= 100; num ++){
// *** console.log(num);
//***  }

//----------datatypes ----------//
let name = {first:'Jane', last:'Doe'}; //object
let truth = false; //boolean
let groceries = ['apple','banana','oranges']; //array
let random; //undefined
let nothing = null; //value null

//strings in javascript
let fruit = 'banana';
let fruits = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple'; //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6)); //including 2, upto 6(not including 6)

console.log(fruit.replace('ban','123')); //replacing
console.log(fruits);
console.log(fruits.split(','));//split by comma as on their own strings

//---------arrays--------------//
let fruitsArray = ['banana','orange','pineapple'];
let fruitsArray = new Array('banana','orange','pineapple');

console.log(fruitsArray[2]); // access values at index 2nd
fruitsArray[0]='pear';//change values

console.log(fruitsArray.join(' - '));// ---- output = pear - orange - pineapple----//

//pop();--->pop off the last item
console.log(fruitsArray, fruitsArray.pop(), fruitsArray);

//push();--->adding something new item
console.log(fruitsArray, fruitsArray.push("blackberry"), fruitsArray);




