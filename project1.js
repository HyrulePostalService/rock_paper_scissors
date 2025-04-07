//function for randomized computer choice of RPS//

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let output = choices[Math.floor(Math.random() * choices.length)];

    return output;
}

let div = document.createElement('div');
document.body.appendChild(div);

//create a function for the three buttons where when a 
//user clicks on the button, it returns Rock, paper, or scissors/

function getHumanChoice(){



const rock = document.getElementById("rock");
rock.addEventListener("click", function(){
    div.innerHTML = '<p>You chose rock!</p>';
    return div;
})


const paper = document.getElementById("paper");
paper.addEventListener("click", function(){
    div.innerHTML = '<p>You chose paper!</p>';
    return div;
})

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(){
    div.innerHTML = '<p>You chose scissors!</p>';
    return div;
})

}
//end

//descrambling code below....//

function playGame(){

    let humanScore = 0;
let computerScore = 0;
   let champion = '';


for (i = 0; i< 5; i++ ){
   
    const humanSelect = getHumanChoice();
    const computerSelect = getComputerChoice();

//test for ui branch push//


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



