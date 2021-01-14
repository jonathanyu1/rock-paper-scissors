
const moveArray = [`rock`,`paper`,`scissors`];
let playerScore=0;
let computerScore=0;

const container = document.querySelector('#container');

const roundResults = document.createElement('div');
roundResults.classList.add('roundResults');
container.appendChild(roundResults);

const score = document.createElement('div');
score.classList.add('score');
container.appendChild(score);

const winner=document.createElement('div');
winner.classList.add('winner');
container.appendChild(winner);

// Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=> {
    btn.addEventListener('click', function (e){
        playRound(e.target.id);
        playGame();
    });
    
});

// Display the running score, and announce a winner of the game once one player reaches 5 points.

function playGame(){
    winner.textContent=``;
    score.textContent=`The score is: ${playerScore} to ${computerScore}`;
    if (playerScore == 5){
        // change winner results text content to the winner and reset
        winner.textContent=`The winner of the game is Player!`;
        playerScore=0;
        computerScore=0;
    } else if (computerScore == 5){
        winner.textContent=`The winner of the game is Computer!`;
        playerScore=0;
        computerScore=0;
    }
}

function computerPlay(){
    let randomMove = moveArray[Math.floor(Math.random() * moveArray.length)];
    return randomMove;
}

// add div for results and change text content of it to whoever wins in place of the console.log

function playRound(playerSelection){
    const computerSelection = computerPlay();
    // returns player if player wins, computer if player loses, tie if tied
    if (playerSelection === computerSelection){
        roundResults.textContent=`It's a tie, both selected ${playerSelection}`;
        return;
    } else if (playerSelection === `rock`){
        if (computerSelection === `paper`){
            roundResults.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else {
            roundResults.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
    } else if (playerSelection === `paper`){
        if (computerSelection === 'scissors'){
            roundResults.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;;
        } else {
            roundResults.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
    } else if (playerSelection === `scissors`){
        if (computerSelection === 'rock'){
            roundResults.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else {
            roundResults.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }   
    }
}
