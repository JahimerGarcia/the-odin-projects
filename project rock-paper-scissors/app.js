const choices =["paper", "rock", "scissors"]; // only three options
const computerPlay = () => choices[Math.floor(Math.random() * choices.length)]; //random choice of computer

const winningPlays = ["paper beats rock","rock beats scissors","scissors beats paper"] // winning plays  

function play1Game(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // falta hacer un if para el player selection
    let playerWin = `${playerSelection} beats ${computerSelection}` // compare to winningPlays
    
    if (winningPlays.includes(playerWin)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

} 

function game(Rounds=5){
    for (let index = 0; index < Rounds; index++) {
        let playerSelection = prompt("write rock or paper or scissors","");
        let computerSelection= computerPlay();
        console.log(play1Game(playerSelection,computerSelection))
        
    }
}

game()