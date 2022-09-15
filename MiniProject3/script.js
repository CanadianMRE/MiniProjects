let Wins = 0;
let Losses = 0;
let Ties = 0;

let choiceer = {
    "Rock": ["Paper"],
    "Paper": ["Scissors"],
    "Scissors": ["Rock"]
}

let computerchoices = [
    "Rock",
    "Paper",
    "Scissors"
]

let converter = {
    "rock": "Rock",
    "r": "Rock",
    "paper": "Paper",
    "p": "Paper",
    "scissors": "Scissors",
    "s": "Scissors"
}

function GetComputerChoice() {
    let keys = Object.keys(choiceer);
    let num = Math.floor(keys.length * Math.random());
    return computerchoices[num];
}

function ChooseWinner(playerinput, computerinput) {
    if (playerinput) {
        let playernewinput = converter[playerinput.toLowerCase()]
        if (playernewinput == computerinput) {
            Ties += 1;
            return [
                "Tied",
                computerinput
            ];
        } else if (choiceer[playernewinput] == computerinput) {
            Losses += 1;
            return [
                "Lost",
                computerinput
            ];
        } else {
            Wins += 1;
            return [
                "Won",
                computerinput
            ];
        }
    } else {
        Losses += 1;
        return [
            "Lost",
            computerinput
        ];
    }
}

function DisplayScore() {
    let message = "Wins: "+Wins+"\n";
    message += "Losses: "+Losses+"\n";
    message += "Ties: "+Ties;

    console.log(message);
    window.alert(message);
}

function NewGame() {
    let userinput = window.prompt("Are you going to play rock, paper or scissors? (R, P, or S)");
    
    let wininfo = ChooseWinner(userinput, GetComputerChoice());
    
    let winstatus = wininfo[0]
    let computerchoice = wininfo[1]

    window.alert("You " + winstatus + "! The computer chose "+computerchoice+"!");

    DisplayScore();

    if (window.confirm("Would you like to play again?")) {
        NewGame();
    }
}

NewGame();