function getComputerChoice ()
{
    const cards = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    return cards[index];
}

function getResult (playerChoice, computerChoice)
{
    if (playerChoice === computerChoice)
    {
        return 'Draw!';
    }

    else if (playerChoice === 'rock')
    {
        return (computerChoice === 'paper') ? 'You Lose! Paper beats Rock' : 'You Won! Rock beats Scissors';
    }

    else if (playerChoice === 'paper')
    {
        return (computerChoice === 'scissor') ? 'You Lose! Scissors beats Paper' : 'You Won! Paper beats Rock';
    }

    else if (playerChoice === 'scissor')
    {
        return (computerChoice === 'rock') ? 'You Lose! Rock beats Scissors' : 'You Won! Scissors beats Paper';
    }
}

let playerScore = 0;
let computerScore = 0;

function resetScores ()
{
    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = 'Player Score : 0';
    computerScoreText.textContent = 'Computer Score : 0';

    playerChoiceImage.style.border = '10px solid black';
    computerChoiceImage.style.border = '10px solid black';
    playerChoiceImage.src = 'https://fav.farm/❔';
    computerChoiceImage.src = 'https://fav.farm/❔';
    playerChoiceImage.alt = '❔';
    computerChoiceImage.alt = '❔';
}

function setChoiceImage (playerChoice, computerChoice)
{
    playerChoiceImage.src = `images/${playerChoice}.png`;
    computerChoiceImage.src = `images/${computerChoice}.png`;
    playerChoiceImage.alt = playerChoice;
    computerChoiceImage.alt = computerChoice;
}

function checkResult (result)
{
    let gameResult = result.slice(0, 8);

    if (gameResult === 'You Won!')
    {
        playerScore++;
        playerScoreText.textContent = `Player Score : ${playerScore}`;
        resultText.style.color = 'green';
        resultText.textContent = result;
        playerChoiceImage.style.border = '10px solid green';
        computerChoiceImage.style.border = '10px solid red';
    }

    else if (result === 'Draw!')
    {
        resultText.style.color = 'black';
        resultText.textContent = result;
        playerChoiceImage.style.border = '10px solid black';
        computerChoiceImage.style.border = '10px solid black';
    }

    else
    {
        computerScore++;
        computerScoreText.textContent = `Computer Score : ${computerScore}`;
        resultText.style.color = 'red';
        resultText.textContent = result;
        playerChoiceImage.style.border = '10px solid red';
        computerChoiceImage.style.border = '10px solid green';
    }
}

function playGame (playerChoice)
{
    if (playerScore === 5 || computerScore === 5)
    {
        resetScores();
    }

    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice);
    
    setChoiceImage(playerChoice, computerChoice);
    checkResult(result);

    if (playerScore === 5)
    {
        resultText.style.color = 'green';
        resultText.textContent = 'Congratulations! You Won the Game! 🎉';
    }

    else if (computerScore === 5)
    {
        resultText.style.color = 'red';
        resultText.textContent = 'You Lost the Game! Better Luck Next Time! 😢';
    }
}

function getChoice (choice)
{
    let playerChoice = choice.target.alt;
    playGame(playerChoice);
}

const playButton = document.querySelectorAll('button');
playButton.forEach(button => button.addEventListener('click', getChoice));

const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const resultText = document.querySelector('#result');
const playerChoiceImage = document.querySelector('#player-choice');
const computerChoiceImage = document.querySelector('#computer-choice');