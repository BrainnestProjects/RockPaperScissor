const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    {"player":"rock", "computer":"scissors"},
    {"player":"scissors", "computer":"paper"},
    {"player":"paper", "computer":"rock"}
  ];
  
let computerPoint = 0;
let playerPoint = 0;
let tiePoint = 0;  
  

/**
 * This function ramdomly generates computer selection
 * 
 * @returns Computer's Selection
 */
function computerPlay(){
    let randomIndex = Math.floor(Math.random() * computerSelections.length)
    return computerSelections[randomIndex];;
}

/**
 * This function takes Player Input from console and also validates it.
 * 
 * @returns player's selection
 */
function playerPlay(){
    let playerChose = prompt("enter your selection form \"rock\" , \"paper\" , \"scissors\" ");
    if(playerChose)
    {
        playerChose = playerChose.toLowerCase();
    }

    if(!computerSelections.includes(playerChose)){
        playerChose = "Invalid";
        alert("Invalid input");
    }

    return playerChose;
}

/**
 * Play Round - This function decides a winner of a single game round.
 * 
 * @param {playerSelection} playerSelection 
 * @param {computerSelection} computerSelection 
 * @returns 
 */
function playRound( playerSelection , computerSelection ){

    let roundResult = "";
    
    if(playerSelection === computerSelection)
     {
        roundResult = "Its a Tie!";
        tiePoint++;
     }else{

        let result = playerWins.filter( item =>item.player === playerSelection && item.computer === computerSelection )

        if (result.length > 0){
            roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
            playerPoint++;
        }
        else{
            roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerPoint++;
        }
     }

     return roundResult;
}

/**
 * This function declares final result based on points.
 */
function finalGameResult(){
    console.log("player Points : ",playerPoint);
    console.log("computer Points : ",computerPoint);
    console.log("tiePoints :",tiePoint);
    if(playerPoint > computerPoint && playerPoint >= tiePoint)
    {
        console.log("Player is a Winner");
        alert("Congratulations...You Win!");
    }else if(computerPoint > playerPoint && computerPoint >=tiePoint)
    {
        console.log("Computer is a Winner");
        alert("Oops... You Lose");
    }else
    {
        console.log("Its a Tie!");
        alert("Its a Tie!");
    }
}

/**
 * This function is to start the game of 5 rounds.
 */
function game(){

    let playerSelection;
    let computerSelection;
    let rounds = 5;
    for(let i=0 ; i<rounds ; i++){
         
         playerSelection = playerPlay();

         if(playerSelection === "Invalid")
         {
            rounds = rounds + 1;
         }
         else{
            computerSelection = computerPlay();
            console.log("Computer's Selection :" , computerSelection); 
            let roundResult = playRound( playerSelection , computerSelection );
            if(roundResult)
            {
                console.log(roundResult);
            }
         }
    }
    finalGameResult();
}

game();