let uScore = 0;
let cScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userp = document.querySelector("#user-score");
let compp = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const Game = (userChoice)=>{
    const  compChoice = genCompChoice();
    console.log(`${userChoice}`);
    console.log(`${compChoice}`);
    if(userChoice === compChoice)
    {
        console.log("Draw");
        msg.innerText = "Its a Draw!";
        msg.style.backgroundColor = "rgb(3, 3, 57)";
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            if(compChoice === "paper")
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }

        else if(userChoice === "paper")
        {
            if(compChoice === "rock")
            {
                userWin = true;
            }
            else
            {
                userWin = false;
            }
        }

        else if(userChoice === "scissors")
        {
            if(compChoice === "rock")
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

for(let choice of choices)
{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        Game(userChoice);
        
    });
}

showWinner=(userWin, userChoice, compChoice) =>{
    console.log("hello");
    if(userWin)
    {
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("win");
        uScore++;
        userp.innerText = uScore;

    }
    else
    {
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
        console.log("lose");
        cScore++;
        compp.innerText = cScore;
    }
}