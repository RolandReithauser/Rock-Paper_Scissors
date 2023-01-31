let userWins = 0,
    computerWins = 0;
    
alert(" Please open the control panel: CTRL + SHIFT + I ");

console.log("Let's get started!");

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors: "),
            computerSelection;

        const choices = ['rock', 'paper', 'scissors'];

        let computerPlay = Math.random() * 10;

        if (playerSelection !== null) {
            playerSelection = playerSelection.toLowerCase().trim();
        }

        while ((playerSelection === null) || (playerSelection === '') || (!choices.includes(playerSelection))) {

            if (playerSelection === '' || playerSelection === null) {
                playerSelection = prompt("You entered nothing.\n Try again...Rock, paper or scissors:")
            } else {
                playerSelection = prompt("You typed it wrong.\n Try again. Choose rock, paper or scissors: ");
                if (playerSelection !== null) {
                    playerSelection = playerSelection.toLowerCase().trim();
                };
            }
        }

        playerSelection = playerSelection.toLowerCase().trim();

        function playRound(playerSelection, computerSelection) {

            if (computerPlay >= 0 && computerPlay < 3.5) {
                computerSelection = 'rock';
                if (playerSelection === 'scissors') {
                    computerWins++;
                    i++;
                    return `You lost this round.\n Rock beats scissors.`;
                } else if (playerSelection === 'paper') {
                    userWins++;
                    i++;
                    return `You won this round.\n Paper beats rock.`;
                } else {
                    return `It's a tie!`;
                }
            } else if (computerPlay >= 3.5 && computerPlay < 6.5) {
                computerSelection = 'paper';
                if (playerSelection === 'scissors') {
                    userWins++;
                    return `You won this round.\n Scissors beat paper.`;
                } else if (playerSelection === 'rock') {
                    computerWins++;
                    return `You lost this round.\n Paper beats rock.`;
                } else {
                    return `It's a tie!`
                }
            } else {
                computerSelection = 'scissors';
                if (playerSelection === 'rock') {
                    userWins++;
                    return `You won this round.\n Rock beats scissors.`;
                } else if (playerSelection === 'paper') {
                    computerWins++;
                    return `You lost this round.\n Scissors beat paper.`;
                } else {
                    return `It's a tie!`;
                }
            }
        }

        console.log(playRound(playerSelection, computerSelection) + ` Current score is ${userWins} : ${computerWins}.`);

    }

    if (userWins > computerWins) {
        console.log(`You won the game.\n Final score is ${userWins} : ${computerWins}.`);
    } else if (userWins === computerWins) {
        console.log(`It's equal.\n Final score is ${userWins} : ${computerWins}.`);
    } else {
        console.log(`You lost the game.\n Final score is ${userWins} : ${computerWins}.`);
    }
}

game();