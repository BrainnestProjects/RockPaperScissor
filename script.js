const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    {"player":"rock", "computer":"scissors"},
    {"player":"scissors", "computer":"paper"},
    {"player":"paper", "computer":"rock"}
  ];
  
  const computerWins = [
    {"player":"rock", "computer":"paper"},
    {"player":"scissors", "computer":"rock"},
    {"player":"paper", "computer":"scissors"}
  ];
 
let playerSelection;
let computerSelection;  
let computerPoint=0;
let playerPoint=0;
let tiePoint = 0;

/**
 * 
 * @param {*} computerSelections 
 * @returns random index
 */
function computerPlay(computerSelections){
    let randomIndex = Math.floor(Math.random() * computerSelections.length)
    return randomIndex;
}

/**
 * 
 * @returns player selection
 */
function playerPlay(){
    let playerChose = prompt("enter your selection form \"rock\" , \"paper\" , \"scissors\" ");
    if(playerChose)
    {
        playerChose = playerChose.toLowerCase();
    }

    if(!computerSelections.includes(playerChose)){
        alert(" Invalid input");
    }

    return playerChose;
}

function compareStrings(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}


function playRound( playerSelection , computerSelection ){
    const selectionsOfRound ={ "player": playerSelection, "computer" : computerSelection};

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
        //alert("Its a Tie!");
        tiePoint++;
     }else{

        for(let i = 0 ; i<playerWins.length; i++)
        {
            if( compareStrings(selectionsOfRound, playerWins[i]))
            {
                console.log("Player Wins");
                playerPoint++;
                break;
            }

            if( compareStrings(selectionsOfRound, computerWins[i]))
            {
                console.log("Computer Wins");
                computerPoint++;
                break;
            }
        }
     }
     computerSelection = computerSelections[computerPlay(computerSelections)];


}

function game(){
    
    for(let i=0 ; i<5 ; i++){
         const computerSelection = computerSelections[computerPlay(computerSelections)];
         console.log("Computer Selection :" , computerSelection);
         playerSelection = playerPlay();
         
         playRound( playerSelection , computerSelection );
    }

    console.log("playerPoint : ",playerPoint);
    console.log("computerPoint : ",computerPoint);
    console.log("tiePoint :",tiePoint);
    if(playerPoint > computerPoint && playerPoint > tiePoint)
    {
        alert("Player Won");
    }else if(computerPoint > playerPoint && computerPoint >tiePoint)
    {
        alert("Computer Won");
    }else
    {
        alert("Its a Tie");
    }
}

game();