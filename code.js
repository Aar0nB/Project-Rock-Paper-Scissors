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
        console.log('That\'s a tie! Play again.');
        return 'LOSE'; 
    }else
    if(playerSelection=='ROCK'){
        if(computerSelection=='PAPER'){
            console.log('You lose! Paper beats rock.');
            return 'LOSE'
        }else
        if(computerSelection=='SCISSORS'){
            console.log('You win! Rock beats scissors.');
            return 'WIN';
        }
    }else
    if(playerSelection=='PAPER'){
        if(computerSelection=='ROCK'){
            console.log('You win! Paper beats rock.');
            return 'WIN';
        }else
        if(computerSelection=='SCISSORS'){
            console.log('You lose! Scissors beats paper.');
            return 'LOSE'
        }
    }else
    if(playerSelection=='SCISSORS'){
        if(computerSelection=='ROCK'){
            console.log('You lose! Rock beats scissors.');
            return 'LOSE'
        }
        if(computerSelection=='PAPER'){
            console.log('You win! Scissors beats paper');
            return 'WIN';
        }
    }
}
function game(){
    var wins = 0;
    var losses = 0;
    for(let i=1;i<6;i++){
        var input=prompt("Rock, paper, or scissors?");
        var output = playRound(input,computerPlay());
        if(output == 'WIN'){
            wins++;
        }else{
            losses++;
        }
        console.log("Round "+i+" score: \nWins: "+wins+"\nLosses: "+losses);
    }
}
//console.log(playRound('rock',computerPlay()));
console.log(game());