let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();
// if(score === null){     //or if(!score)
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }

document.querySelector('.js-click-listener').addEventListener('click', ()=>{
    playGame('rock');
});

document.body.addEventListener('keydown', (event)=>{
    if(event.key === 'r'){
        playGame('rock');
    }else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('scissors');
    }
});

function playGame(playerMove){
let move = '';
let result = '';
if(playerMove==='scissors'){
    move = pickComputerMove();
    if(move==='rock'){
        result='You lose';
    }else if(move==='paper'){
        result='You win';
    }else{
        result='Tie';
    }
}

else if(playerMove==='paper'){
    move = pickComputerMove();
    if(move==='rock'){
        result='You win';
    }else if(move==='paper'){
        result='Tie';
    }else{
        result='You lose';
    }
}

else{
    move = pickComputerMove();
    if(move==='rock'){
        result='Tie';
    }else if(move==='paper'){
        result='You lose';
    }else{
        result='You win';
    }
}

if(result==='You win'){
    score.wins++;
}else if(result==='You lose'){
    score.losses++;
}
else{
    score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You
<img src="rock-paper-scissors-img/${playerMove}-emoji.png" class="move-icon">
<img src="rock-paper-scissors-img/${move}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.wins}, Loses : ${score.losses}, Ties : ${score.ties}`;
}
// let computerMove = '';
function pickComputerMove(){
let computerMove = '';
let randomNumber = Math.random();
if(randomNumber>=0 && randomNumber<1/3){
    computerMove = 'rock';
}

else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove = 'paper';
}

else{
    computerMove = 'scissors';
}
return computerMove;
}