const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let div = document.createElement("div");
document.body.appendChild(div);

let humanScore = 0;
let computerScore = 0;
let roundsTotal = 0;
let champion = '';


function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let output = choices[Math.floor(Math.random() * choices.length)];
    return output;
}



function getHumanChoice(){
    rock.addEventListener("click", function(){
        if(roundsTotal < 5 ){

        
        let playerChoice = 'rock';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' the computer chose ' + computerChoice + ' </p>'
        + '<p> the result of this feirce match is...<br> </p> ' + result + '<p>The current score is ' + humanScore + ' For you and ' + computerScore + ' For Computer';
    
            fiveRounds();

    }})

    paper.addEventListener("click", function(){
        if(roundsTotal < 5 ){

        
        let playerChoice = 'paper';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' the computer chose ' + computerChoice + ' </p>'
        + '<p> the result of this feirce match is....<br> </p>'  + result + '<p>The current score is ' + humanScore + ' For you and ' + computerScore + ' For Computer';
    
            fiveRounds();

    }})

    scissors.addEventListener("click", function(){
        if (roundsTotal < 5 ){

        
        let playerChoice = 'scissors';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' the computer chose ' + computerChoice + ' </p>'
        + '<p> the result of this feirce match is....<br> </p>'  + result + '<p>The current score is ' + humanScore + ' For you and ' + computerScore + ' For Computer';
            
       fiveRounds();
    }})

  
}



function playRound(playerChoice, computerChoice){

            
    
    if (playerChoice === computerChoice){
        roundsTotal++
        return "It's a tie, oh my!";
    }

    else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        roundsTotal++;
        humanScore++;
        return "You win this round..." + playerChoice + " beats " + computerChoice
    }

    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        roundsTotal++;
        humanScore++;
        return "You win this round..." + playerChoice + " beats " + computerChoice
    }

    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        roundsTotal++;
        humanScore++;
        return "You win this round..." + playerChoice + " beats " + computerChoice
    }

    else {
        roundsTotal++;
        computerScore++;
        return "You lose this round..." + computerChoice + " beats " + playerChoice
    }

    
}

function fiveRounds(){
    if(roundsTotal == 5){
        displayChampion();
    }
}

function displayChampion(){
  if (humanScore > computerScore){
    champion = "The winner is you! You should feel fantastic about yourself dear friend. Well done!";
  }
  else if (computerScore > humanScore){
    champion =  "The winner is the computer. Oh well....";
  }

  else {
    champion =  "It's a tie this time...";
  }

  div.innerHTML += '<p> The champion is.... </p>' + champion;

}



getHumanChoice();
