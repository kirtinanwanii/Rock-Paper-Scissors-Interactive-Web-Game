let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,scissors

    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw!");
    msg.innerText = "GAME WAS DRAW PLAY AGAIN";
    msg.style.backgroundColor = "#b281c9";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `yayy you wonn! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#6c91c2";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
    
        msg.innerText = `oops u lost!! your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#fe7799";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //  GENERATE COMPUTER CHOICE

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice)
    { //draw game
drawGame();
 }
 else{
    let userWin = true; //CASE1
    if (userChoice === "rock"){
        // scissors, paper
        userWin = compChoice === "paper" ? false : true;    
    } //CASE2
    else if (userChoice === "paper"){
        //rock, scisssors

        userWin = compChoice === "scissors" ? false : true;
    } //CASE3
     else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
     }
     showWinner(userWin, userChoice, compChoice);
 }
};

choices.forEach((choice) => {
choice.addEventListener ("click",() =>{
    const userChoice = choice.getAttribute("id");
playGame(userChoice);
});
});