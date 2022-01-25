//-------challenge1- age in days------------//
function ageInDaysFunction(){
var birthYear = prompt("What were you born?");
var ageInDays = (2022 - birthYear)*365;
var h1 = document.createElement("h1");//creating a h1 element
var textAnswer = document.createTextNode("You are "+ageInDays+" days old.");//creating a text
h1.setAttribute('id','ageInDays');//set in h1 'id' attribute to 'ageInDays'
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageInDays);
}

function resetFunction(){
  document.getElementById('ageInDays').remove();//removes inner text
}
