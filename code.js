function computerPlay(){
    let min = 0;
    let max = 3;
    let x = Math.floor(Math.random()*(max-min)+min);
    switch (x){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default: 
            return 'What the fuck';
    }
}
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerSelection.toUpperCase();
    if(playerSelection==computerSelection){
        return 'That\'s a tie! Play again.'; 
    }else
    if(playerSelection=='ROCK'){
        if(computerSelection=='PAPER'){
            return 'You lose! Paper beats rock.';
        }else
        if(computerSelection=='SCISSORS'){
            return 'You win! Rock beats scissors.';
        }
    }else
    if(playerSelection=='PAPER'){
        if(computerSelection=='ROCK'){
            return 'You win! Paper beats rock.';
        }else
        if(computerSelection=='SCISSORS'){
            return 'You lose! Scissors beats paper.';
        }
    }else
    if(playerSelection=='SCISSORS'){
        if(computerSelection=='ROCK'){
            return 'You lose! Rock beats scissors.';
        }
        if(computerSelection=='PAPER'){
            return 'You win! Scissors beats paper';
        }
    }
}
console.log(playRound('rock',computerPlay()));