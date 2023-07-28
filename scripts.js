const cards = ['rock', 'paper', 'scissor'];

function getComputerChoice ()
{
    let index = Math.floor(Math.random() * 3);
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
        return (computerChoice === 'paper') ? 'You Lose! Paper beats Rock' : 'You Won!';
    }

    else if (playerChoice === 'paper')
    {
        return (computerChoice === 'scissor') ? 'You Lose! Scissor beats Paper' : 'You Won!';
    }

    else if (playerChoice === 'scissor')
    {
        return (computerChoice === 'rock') ? 'You Lose! Rock beats Scissor' : 'You Won!';
    }
}

function playGame ()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++)
    {
        let playerChoice = prompt('Choose Rock, Paper or Scissor');
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = getResult(playerChoice, computerChoice);
        console.log(result);
        
        if (result === 'You Won!')
        {
            playerScore++;
        }

        else if (result === 'Draw!')
        {
            continue;
        }

        else
        {
            computerScore++;
        }
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame();