let Wins = 0;
let Losses = 0;
let Ties = 0;

// Dict to compare 
let choiceer = {
    "Rock": ["Paper"],
    "Paper": ["Scissors"],
    "Scissors": ["Rock"]
}

// Array of choices the computer can make
let computerChoices = [
    "Rock",
    "Paper",
    "Scissors"
]

// Converter to convert player input so we can properly compare to the computer
let converter = {
    "rock": "Rock",
    "r": "Rock",
    "paper": "Paper",
    "p": "Paper",
    "scissors": "Scissors",
    "s": "Scissors"
}

// Get a random entry in computerchoices array
function GetComputerChoice() {
    let keys = Object.keys(choiceer);
    let num = Math.floor(keys.length * Math.random());
    return computerChoices[num];
}

// Compare computer vs player to find a winner
function ChooseWinner(playerInput, computerInput) {
    if (playerInput) {
        let playernewinput = converter[playerInput.toLowerCase()]
        if (playernewinput === computerInput) {
            // Equal inputs, its a tie!
            Ties++;
            return [
                "Tied",
                computerInput
            ];
        } else if (choiceer[playernewinput] === computerInput) {
            // Computer is equal to player's loss input, computer wins
            Losses++;
            return [
                "Lost",
                computerInput
            ];
        } else {
            // Its not a tie or a loss, so player wins
            Wins++;
            return [
                "Won",
                computerInput
            ];
        }
    } else {
        // Wrong input, automatic loss
        Losses++;
        return [
            "Lost",
            computerInput
        ];
    }
}

// displays the current score
function DisplayScore() {
    let message = "Wins: "+Wins+"\n";
    message += "Losses: "+Losses+"\n";
    message += "Ties: "+Ties;

    console.log(message);
    window.alert(message);
}

// Main function for starting and handling the round of rps
function NewGame() {
    let userInput = window.prompt("Are you going to play rock, paper or scissors? (R, P, or S)");
    
    let winInfo = ChooseWinner(userInput, GetComputerChoice());
    
    let winStatus = winInfo[0];
    let computerChoice = winInfo[1];

    window.alert("You " + winStatus + "! The computer chose "+computerChoice+"!");

    DisplayScore();
}

// Start the game
while (true) {
    // If the player wants to play or continue playing rps, ask again
    if (window.confirm("Would you like to play Rock, Paper, Scissors?")) {
        NewGame();
    } else {
        DisplayScore();
        break;
    }
}
