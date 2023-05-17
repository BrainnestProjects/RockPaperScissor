const choices = document.querySelectorAll('.choice');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const resultEl = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const countdownEl = document.querySelector('#countdown');
const computerChoiceEl = document.querySelector('#computer-choice');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let countdown = 10;
let timeout;

// Function to generate random weapon for computer
function computerPlay() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons[weaponIndex];
  }

  // Function to update score and display result
function updateScore(playerWeapon, computerWeapon) {
    clearTimeout(timeout);
    if (playerWeapon) {
      computerChoiceEl.innerHTML = `Computer choose: ${computerWeapon}.`;
      if (playerWeapon === computerWeapon) {
        resultEl.innerHTML = "It's a tie!";
      } else if (
        (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'paper' && computerWeapon === 'rock') ||
        (playerWeapon === 'scissors' && computerWeapon === 'paper')
      ) {
        resultEl.innerHTML = 'You win!';
        playerScore++;
        playerScoreEl.innerHTML = `Player: ${playerScore}`;
      } else {
        resultEl.innerHTML = 'Computer wins!';
        computerScore++;
        computerScoreEl.innerHTML = `Computer: ${computerScore}`;
      }
      startTimer();
    } else {
      computerChoiceEl.innerHTML = `Game Over`;
      resultEl.innerHTML = 'You did not make a choice! | You lose the game!';
      resultEl.style.color = 'red';
      disableOptions();
    }
  
    if (playerScore === 5) {
      resultEl.textContent = 'You win the game!';
      resultEl.style.color = 'green';
      computerChoiceEl.innerHTML = 'Game Over';
      disableOptions();
      stopTimer();
    }
  
    if (computerScore === 5) {
      resultEl.textContent = 'You lose the game!';
      resultEl.style.color = 'red';
      computerChoiceEl.innerHTML = 'Game Over';
      disableOptions();
      stopTimer();
    }
  }

  // Function to handle player choice
function selectWeapon() {
    clearTimeout(timeout);
    countdownEl.innerHTML = '10';
    countdown = 10;
    const playerWeapon = this.id;
    const computerWeapon = computerPlay();
    updateScore(playerWeapon, computerWeapon);
  }

  // Function to start countdown timer
function startTimer() {
    countdown--;
    countdownEl.innerHTML = countdown;
    if (countdown === 0) {
      const computerWeapon = computerPlay();
      updateScore(null, computerWeapon);
    } else {
      timeout = setTimeout(startTimer, 1000);
    }
  }
  
  function stopTimer() {
    clearInterval(timeout);
    countdown = 10;
    countdownEl.textContent = countdown;
  }

  // Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    countdown = 10;
    playerScoreEl.innerHTML = 'Player: 0';
    computerScoreEl.innerHTML = 'Computer: 0';
    resultEl.innerHTML = 'Choose your weapon!';
    countdownEl.innerHTML = '10';
    resultEl.style.color = '#660033';
    computerChoiceEl.innerHTML = '';
    enableOptions();
    startTimer();
  }
  
  function disableOptions() {
    choices.forEach((choice) => {
      choice.style.pointerEvents = 'none';
    });
  }
  
  function enableOptions() {
    choices.forEach((choice) => {
      choice.style.pointerEvents = 'auto';
    });
  }

  // Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
playAgainBtn.addEventListener('click', resetGame);

// Start countdown timer when page loads
countdownEl.innerHTML = countdown; // Set initial value of countdown in HTML
timeout = setTimeout(startTimer, 1500);




//--------------------OLD CODE-------------------------------//

// const computerSelections = ['rock','paper','scissors'];
// const playerWins = [
//     {"player":"rock", "computer":"scissors"},
//     {"player":"scissors", "computer":"paper"},
//     {"player":"paper", "computer":"rock"}
//   ];

// const playerInputMessage=  "Enter your selection from \"rock\" , \"paper\" , \"scissors\" ";
// const invalidUserInput = "Invalid";
// const exitGame = "EXIT";

/**
 * This function ramdomly generates computer selections
 * 
 * @returns {string} Computer's Selection  : 'rock' or 'paper' or 'scissors' based on random index generated
 */
// function computerPlay(){
//     let randomIndex = Math.floor(Math.random() * computerSelections.length)
//     return computerSelections[randomIndex];
// }

/**
 * This function takes Player Input from console and also validates it.
 * 
 * @returns {string} returns player's selection taken from console
 */
// function playerPlay(){
//     let playerChose = prompt(playerInputMessage);
//     if(playerChose){
//         playerChose = playerChose.toLowerCase().trim();
//     }

//     if(playerChose === null)
//     {
//         playerChose = exitGame;
//         console.log("The game has been Ended by You.");
//     }
//     else if(!computerSelections.includes(playerChose))
//     {
//         alert(`${playerChose} Invalid input! Please enter the correct option.`);
//         playerChose = invalidUserInput;
//     }

//     return playerChose;
// }

/**
 * Play Round - This function decides the winner of a single game round.
 * 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @param {object} gamePoints - object which will store points scored by player/computer or tie.
 * @returns {object} gamePoints returns individual points for Computer,Player and Tie
 */
// function playRound( playerSelection , computerSelection , gamePoints){
//     let roundResult = "";
        
//     if(playerSelection === computerSelection)
//      {
//         roundResult = "Its a Tie!";
//         gamePoints.tiePoint++;
//      }else{

//         let result = playerWins.filter( item =>item.player === playerSelection && item.computer === computerSelection )

//         if (result.length > 0){
//             roundResult = "You Won! " + playerSelection + " beats " + computerSelection;
//             gamePoints.playerPoint++;
//         }
//         else{
//             roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
//             gamePoints.computerPoint++;
//         }
//      }
//      if(roundResult)
//      {
//         console.log(roundResult);
//      }
//      return gamePoints;
// }

/**
 * This function declares final result based on points scored by player/computer.
 * and give alert and console message about player won or lose.
 * @param {object} gamePoints object which is storing points scored by player/computer or tie.
 */
// function finalGameResult(gamePoints){
//     console.log("player Points : ",gamePoints.playerPoint);
//     console.log("computer Points : ",gamePoints.computerPoint);
//     console.log("tiePoints :",gamePoints.tiePoint);
//     if(gamePoints.playerPoint > gamePoints.computerPoint)
//     {
//         console.log("Player is a Winner");
//         alert("Congratulations...You Won The Game!");
//     }else if(gamePoints.computerPoint > gamePoints.playerPoint)
//     {
//         console.log("Computer is a Winner");
//         alert("Oops... You Lose The Game!");
//     }else
//     {
//         console.log("Its a Tie!");
//         alert("Its a Tie!");
//     }
// }

/**
 * This function is used to start the game of 5 rounds.
 */
// function game(){

//     let playerSelection;
//     let computerSelection;
//     let gamePoints = {"computerPoint" : 0, "playerPoint" : 0, "tiePoint" : 0}; 
    
//     let rounds = 5;
//     let counter = 1;
//     for(let i=0 ; i<rounds ; i++){
         
//          playerSelection = playerPlay();
//          if(playerSelection === exitGame)
//          {
//             return; // Stop the game
//          }
//          if(playerSelection === invalidUserInput)
//          {
//             rounds = rounds + 1;
//          }
//          else{
//             console.log("Game Round No.", counter);
//             computerSelection = computerPlay();
//             console.log("Computer's Selection :" , computerSelection);
//             console.log("Player's Selection :" , playerSelection);

//             gamePoints = playRound( playerSelection , computerSelection , gamePoints );
//             counter++;
//          }
//     }
//     finalGameResult(gamePoints);
// }
// /**
//  * Promt for player selection is causing HTML to load later so setting timeout for it.
//  * This will laod HTML first and then execute promt JS. only for first round of the game.
//  */

// setTimeout(game, 1000);

