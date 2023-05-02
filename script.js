const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"]
  ];
  
  const computerWins = [
    ["rock", "paper"],
    ["scissors", "rock"],
    ["paper", "scissors"]
  ];
  
let computerPoint=0;
let playerPoint=0;

function computerPlay(computerSelections){
let randomIndex = Math.floor(Math.random() * computerSelections.length)
return randomIndex;
}

function playerPlay(){
let playerChose = prompt("enter your selection form \"rock\" , \"paper\" , \"scissors\" ")
playerChose = playerChose.toLocaleLowerCase();

if(!computerSelections.includes(playerChose)){
    alert(" Invalid input")
}

return playerChose;
}

function game(){
    // console.log(computerSelection);
    // console.log(playerSelection);
    for(let i=0 ; i<5 ;++i){
         playRound( playerSelection , computerSelection );
    }

}

function playRound( playerSelection , computerSelection ){
    const selectionArr = [playerSelection, computerSelection];

    // playerselection ComputerSelection Winner
    // Rock             Scissors          Player
    // Rock             Paper             computer
    // Rock             Rock               Tie
    // Scissors         Rock               Computer
   //  Scissors         Paper               Player
    // Scissors         Scissors            Tie
    // Paper            Rock                Player
    // Paper            Scissors            Computer
    // Paper            Paper               Tie
    if(playerSelection === computerSelection)
     {
        alert("Its a Tie!");
     }else{
        //alert("You Lose!");
        if(playerWins.includes(selectionArr))
        {
            alert("Player Wins");
            playerPoint++;
        }
        if(computerWins.includes(selectionArr)){
            alert("computer Wins");
            computerPoint++;
        }
     }
     playerSelection = playerPlay();
     computerSelection = computerSelections[computerPlay(computerSelections)];


}

const playerSelection = playerPlay();
const computerSelection = computerSelections[computerPlay(computerSelections)];
// console.log(computerSelection)
// console.log(playerSelection);
game();

