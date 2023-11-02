let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    target = Math.floor(Math.random() * 9 );
    console.log(target);
    return target;
}

// generateTarget();

function compareGuesses(human,computer,target){
    if(Math.abs(target-human) <= Math.abs(target-computer))
        return true;
    else
        return false;
}

function updateScore(winner)
{
    if (winner === 'human'){
        humanScore += 1;
    }
    else{
        computerScore +=1;
    }
}

function advanceRound(currentRoundNumber){
    currentRoundNumber += 1;
}