const computerSelections = ['rock','paper','scissors'];
const playerWins = [
    {"player":"rock", "computer":"scissors"},
    {"player":"scissors", "computer":"paper"},
    {"player":"paper", "computer":"rock"}
  ];

const playerInputMessage=  "Enter your selection form \"rock\" , \"paper\" , \"scissors\" ";
const invalidUserInput = "Invalid";

/**
 * This function ramdomly generates computer selections
 * 
 * @returns {string} Computer's Selection  : 'rock' or 'paper' or 'scissors' based on random index generated
 */
function computerPlay(){
    let randomIndex = Math.floor(Math.random() * computerSelections.length)
    return computerSelections[randomIndex];
}

/**
 * This function takes Player Input from console and also validates it.
 * 
 * @returns {string} returns player's selection taken from console
 */
function playerPlay(){
    let playerChose = prompt(playerInputMessage);
    if(playerChose)
    {
        playerChose = playerChose.toLowerCase();
    }

    if(!computerSelections.includes(playerChose)){
        playerChose = invalidUserInput;
        alert("Invalid input! Please enter the correct option.");
    }

    return playerChose;
}

/**
 * Play Round - This function decides the winner of a single game round.
 * 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @param {object} gamePoints - object which will store points scored by player/computer or tie.
 * @returns {object} gamePoints returns individual points for Computer,Player and Tie
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
 * This function declares final result based on points scored by player/computer.
 * and give alert and console message about player won or lose.
 * @param {object} gamePoints object which is storing points scored by player/computer or tie.
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
 * This function is used to start the game of 5 rounds.
 */
function game(){

    let playerSelection;
    let computerSelection;
    let gamePoints = {"computerPoint" : 0, "playerPoint" : 0, "tiePoint" : 0}; 
    
    let rounds = 5;
    for(let i=0 ; i<rounds ; i++){
         
         playerSelection = playerPlay();

         if(playerSelection === invalidUserInput)
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
/**
 * Promt for player selection is causing HTML to load later so setting timeout for it.
 * This will laod HTML first and then execute promt JS. only for first round of the game.
 */

setTimeout(game, 1000);

