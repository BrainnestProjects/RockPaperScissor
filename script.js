const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    {"player":"rock", "computer":"scissors"},
    {"player":"scissors", "computer":"paper"},
    {"player":"paper", "computer":"rock"}
  ];
 
/**
 * This function ramdomly generates computer selection
 * 
 * @returns Computer's Selection
 */
function computerPlay(){
    let randomIndex = Math.floor(Math.random() * computerSelections.length)
    return computerSelections[randomIndex];
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
 * @param {gamePoints} gamePoints 
 * @returns {gamePoints} returns individual points for Computer,Player and Tie
 */
function playRound( playerSelection , computerSelection , gamePoints){

    let roundResult = "";
        
    if(playerSelection === computerSelection)
     {
        roundResult = "Its a Tie!";
        gamePoints.tiePoint++;
     }else{

        let result = playerWins.filter( item =>item.player === playerSelection && item.computer === computerSelection )

        if (result.length > 0){
            roundResult = "You Won! " + playerSelection + " beats " + computerSelection;
            gamePoints.playerPoint++;
        }
        else{
            roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
            gamePoints.computerPoint++;
        }
     }
     if(roundResult)
        {
           console.log(roundResult);
        }
     return gamePoints;
}

/**
 * This function declares final result based on points.
 * @param {gamePoints} gamePoints
 */
function finalGameResult(gamePoints){
    console.log("player Points : ",gamePoints.playerPoint);
    console.log("computer Points : ",gamePoints.computerPoint);
    console.log("tiePoints :",gamePoints.tiePoint);
    if(gamePoints.playerPoint > gamePoints.computerPoint)
    {
        console.log("Player is a Winner");
        alert("Congratulations...You Won The Game!");
    }else if(gamePoints.computerPoint > gamePoints.playerPoint)
    {
        console.log("Computer is a Winner");
        alert("Oops... You Lose The Game!");
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
    let gamePoints = {"computerPoint" : 0, "playerPoint" : 0, "tiePoint" : 0}; 
    
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

            gamePoints = playRound( playerSelection , computerSelection , gamePoints );
         }
    }
    finalGameResult(gamePoints);
}

game();