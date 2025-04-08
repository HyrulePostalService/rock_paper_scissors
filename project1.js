function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let output = choices[Math.floor(Math.random() * choices.length)];

    return output;
}

let div = document.createElement("div");
document.body.appendChild(div);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let champion = '';






function playRound(humanSelect, computerSelect){
    if (humanSelect === computerSelect) {
       roundsPlayed++
        return ("It's a tie!");
    }

    else if (humanSelect == 'rock' && computerSelect == 'scissors'){
        roundsPlayed++
        humanScore++;
        return ("You win! Rock beats Scissors");
    }

    else if (humanSelect == 'paper' && computerSelect == 'rock'){
        roundsPlayed++;
       humanScore++;
        return ("You win! paper beats rock");
    }

    else if (humanSelect == 'scissors' && computerSelect == 'paper'){
        roundsPlayed++
        humanScore++;
        return ("You win! scissors beats paper");
    }

    else {
        roundsPlayed++
        computerScore++;
        return ("You lose, " + computerSelect + " beats " + humanSelect);
        
    }

    

}



function getHumanChoice() {

        
    rock.addEventListener("click", function(){
        if(roundsPlayed < 5 ){
            let playerChoice = 'rock';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' Computer chose ' + computerChoice + '</p>' + 
        '<p> The winner is.... </p>' + result +'<p> Your score is ' + humanScore +  ' The computer score is ' + computerScore + '</p>';
            imReady();
        }})

    paper.addEventListener("click", function(){
        if(roundsPlayed < 5 ){
            let playerChoice = 'paper';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' Computer chose ' + computerChoice + '</p>' + 
        '<p> The winner is.... </p>' + result +'<p> Your score is ' + humanScore +  ' The computer score is ' + computerScore + '</p>';
   
            imReady();
    }})
       
    
    scissors.addEventListener("click", function(){
        if(roundsPlayed < 5 ){
            let playerChoice = 'scissors';
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        div.innerHTML = '<p>You chose ' + playerChoice + ' Computer chose ' + computerChoice + '</p>' + 
        '<p> The winner is.... </p>' + result +'<p> Your score is ' + humanScore +  ' The computer score is ' + computerScore + '</p>';
            
        imReady();
    
    }})

}

function imReady(){
    if(roundsPlayed == 5){
        displayChampion();
    }
}

function displayChampion() {
    if (humanScore > computerScore) {
        champion = "Vincent! You are a WINNER!";
    } else if (computerScore > humanScore) {
        champion = "Computer... You got smoked by your own laptop.";
    } else {
        champion = "Tis a tie.";
    }

    div.innerHTML += `<p>After 5 rounds, the final result is: ${champion}</p>`;}



getHumanChoice();


