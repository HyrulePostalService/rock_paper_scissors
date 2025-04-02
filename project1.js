function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let output = choices[Math.floor(Math.random() * choices.length)];

    return output;
}

function getHumanChoice() {
    let decision = prompt('What is your decision?');
    return decision.toLowerCase();
}

function playGame(){

    let humanScore = 0;
let computerScore = 0;
   let champion = '';


for (i = 0; i< 5; i++ ){
   
    const humanSelect = getHumanChoice();
    const computerSelect = getComputerChoice();




function playRound(humanSelect, computerSelect){
    if (humanSelect === computerSelect) {
       
        return ("It's a tie!");
    }

    else if (humanSelect == 'rock' && computerSelect == 'scissors'){
        humanScore++;
        return ("You win! Rock beats Scissors");
    }

    else if (humanSelect == 'paper' && computerSelect == 'rock'){
       humanScore++;
        return ("You win! paper beats rock");
    }

    else if (humanSelect == 'scissors' && computerSelect == 'paper'){
        humanScore++;
        return ("You win! scissors beats paper");
    }

    else {
        computerScore++;
        return ("You lose, " + computerSelect + " beats " + humanSelect);
        
    }



}

if (humanScore > computerScore){
    champion = "Vincent! Holy shit you fucking did it dude! You are a WINNER!";
}

else if (computerScore > humanScore){
    champion = "Computer... You got smoked by your own laptop. Fool.";
}

else if (computerScore == humanScore) {
    champion = "Tis a tie. Oh my.";
}

console.log(playRound(humanSelect, computerSelect));

console.log('Player wins a total of ' + humanScore);
console.log('Computer wins a total of ' + computerScore);

}

console.log('After five rounds the winner is ' + champion);
}


playGame();






