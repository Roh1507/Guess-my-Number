'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Correct Number!!'
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);*/

/*const x=function(){
  console.log(23)
};*/

let number1=Math.floor(Math.random()*20+1);

let score=20;
let highScore=0;
//function msg
/*const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}*/

document.querySelector('.check').addEventListener
('click',function(){
  const guess=Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

if (!guess){
  document.querySelector('.message').textContent='🎃No Number';
}

//when player wins
else if(guess===number1){
  document.querySelector('.message').textContent='🎉🎊Hurrah you got the no';
  document.querySelector('body').style.
  backgroundColor='#867ae9';
  document.querySelector('.number').style.
  width='30rem';
document.querySelector('.number').textContent=number1;
}
else if(guess!== number1){
    if (score > 1){
    document.querySelector('.message').textContent=guess>number1?'🛫Too high':'🛬Too Low';

    score--;
    document.querySelector('.score').textContent=score;
    }else{
      document.querySelector('.message').textContent='😜Lost the game';
document.querySelector('.score').textContent=0;

  }
}
/*if (score> highScore){
  highScore=score;
  document.querySelector('.highscore').textContent=highScore;
}
}else if(guess> number1){
  if (score > 1){
  document.querySelector('.message').textContent='🛫Too high';
score--;
document.querySelector('.score').textContent=score;
}else{
  document.querySelector('.message').textContent='😜Lost the game';

}}
else if(guess < number1){
  if (score > 1){
  document.querySelector('.message').textContent='🛬Too Low';
  score--;
  document.querySelector('.score').textContent=score;
}else{
  document.querySelector('.message').textContent='😜Lost the game';
  document.querySelector('.score').textContent=0;
}}
});*/

document.querySelector('.again').addEventListener
('click',function(){
  number1=Math.floor(Math.random()*20+1);
  score=20;
document.querySelector('.message').textContent='Start Guessing...';
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').textContent='';
document.querySelector('body').style.
backgroundColor='#867ae9';
document.querySelector('.number').style.
width='30rem';}
);
