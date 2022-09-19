let wordDisplay = document.getElementById("textDisplay");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let timer = document.getElementById("timer");
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("startButton");

timer.textContent = "";
wordDisplay.textContent = "Press 'Start' to start!";

let possibleWords = [
    "html",
    "program",
    "style",
    "css",
    "javascript",
    "default",
    "attributes",
    "dom",
    "window",
    "document",
    "keyboard",
    "event",
    "bubbling",
    "data",
    "localstorage",
    "objects",

]

let startingTime = 5;

let WinsCounter = 0;
let LossesCounter = 0;
let counter = 0;
let countTimer;
let currentWord = [];
let currentGameWord = [];
let inProgress = false;

function LoadData() {
    let data = JSON.parse(localStorage.getItem("wordGameData"));

    console.log(data);

    if (data !== null) {
        WinsCounter = data.Wins;
        LossesCounter = data.Losses
    }
}

function SaveData() {
    let data = {
        Wins: WinsCounter,
        Losses: LossesCounter
    }

    localStorage.setItem("wordGameData", JSON.stringify(data));
}

function DisplayStats() {
    LoadData();

    wins.textContent = "Wins: " + WinsCounter;
    losses.textContent = "Losses: " + LossesCounter;
}
DisplayStats();

function Win() {
    currentWord = [];
    currentGameWord = [];
    wordDisplay.textContent = "Press 'Start' to play again!";
    inProgress = false;
    clearInterval(countTimer);
    wordDisplay.textContent = "You Win !!!";
    WinsCounter++;
    SaveData();
    DisplayStats();
}

function Loss() {
    currentWord = [];
    currentGameWord = [];
    wordDisplay.textContent = "Press 'Start' to play again!";
    inProgress = false;
    clearInterval(countTimer);
    wordDisplay.textContent = "You Lose !!!";
    LossesCounter++;
    SaveData();
    DisplayStats()
}

function ResetScore() {
    console.log("resetting");
    WinsCounter = 0;
    LossesCounter = 0;
    SaveData();
    DisplayStats();
}

function UpdateTime(timeRemaining) {
    timer.textContent = timeRemaining + " seconds remaining"
}

function KeyPressed(event) {
    console.log(event)
    if (inProgress) {
        console.log(event)
        let letter = event.key;
    
        for (const index in currentWord) {
            if (currentWord[index] === letter) {
                currentGameWord[index] = currentWord[index];
                DisplayWord();
            }
        }

        let itsawinner = true
        for (const index in currentGameWord) {
            if (currentGameWord[index] === "_") {
                itsawinner = false;
            }
        }

        if (itsawinner) {
            Win();
        }
    }
}

function DisplayWord() {
    let word = currentGameWord.join(' ');

    wordDisplay.textContent = word;
}

function StartGame() {
    counter = startingTime;
    UpdateTime(counter);
    countTimer = setInterval(() => {
        counter--;
        UpdateTime(counter);

        if (counter <= 0) {
            Loss();
        }
    }, 1000);

    let word = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    currentWord = word.split('');
    console.log(currentWord);

    currentGameWord = [];
    currentWord.forEach(element => {
        currentGameWord.push("_");
    });

    DisplayWord();
    inProgress = true;
}

resetButton.addEventListener("click", ResetScore);
startButton.addEventListener("click", StartGame);
document.addEventListener("keydown", KeyPressed);