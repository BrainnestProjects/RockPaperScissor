const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    {player:'rock' , computer:'scissors'},
    {player:'scissors', computer:'paper'},
    {player:'paper', computer:'rock'}
  ];

let computerPoint=0;
let playerPoint=0;

function computerPlay(computerSelections){
let randomIndex = Math.floor(Math.random() * computerSelections.length)
return randomIndex;
}

function playerPlay(){
    let playerChose = prompt("enter your selection form \"rock\" , \"paper\" , \"scissors\" ")
    if(playerChose){
    playerChose = playerChose.toLowerCase();
    }
    if(!computerSelections.includes(playerChose)) {
    // playerChose = "Invalid";
    alert(" Invalid input")
    playerChose=null;
    delete window.playerChose;
   playerPlay();
}

return playerChose;
}


function game(){

    // let rounds = 5;
    for(let i=0 ; i < 5 ; i++){
        const computerSelection = computerSelections[computerPlay(computerSelections)];
        console.log("Computer Selection :" , computerSelection);
        playerSelection = playerPlay();
        // if(playerSelection === "Invalid")
        // {
        //     rounds = rounds + 1;
        // }else{
            console.log("Player Selection :" , playerSelection);
            playRound( playerSelection , computerSelection );
        // }
   }
    finalResult(playerPoint,computerPoint);

}

function playRound( playerSelection , computerSelection ){

    if(playerSelection === computerSelection)
     {
        alert("Its a Tie!");
     }else{
        

        let result=playerWins.filter(
            item =>item.player === playerSelection && item.computer===computerSelection
            )
        if (result.length > 0){
            console.log("Player Wins");
            playerPoint++;
        }
        else{
            console.log("computer Wins");
            computerPoint++;
        }
     }

}
function finalResult(playerPoint,computerPoint){
    console.log("playerPoint : ",playerPoint);
    console.log("computerPoint : ",computerPoint);
    if(playerPoint == computerPoint) console.log("result : Equal")
    else{
        if(playerPoint > computerPoint) console.log("Player Wins")
        else  console.log("computer Wins");
    }

}
game();

