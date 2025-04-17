/*Computer Chocie*/
const options = ["rock","paper","scissors"];

function getCompChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

getCompChoice();


/*Player Choice Using the UI*/

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = docuemnt.getElementById('resultDisplay')






const buttons = document.getElementsByClassName('buttons');



for(i of buttons){
i.addEventListener('click',function(e){
    let pChoice = e.srcElement.value;
    oneRound(pChoice)
}
)
}





 










function oneRound(pChoice,compChoice){
    
    const result = checkWinner(pChoice,compChoice);
        if (result == "Tie"){
            return "Its a tie"
        } 
        else if (result == "Player"){
            return "You win"
        } 
        else {
            return "You lose"
        }
    }
    
    
    
    function checkWinner(pChoice){
        const compChoice = options[Math.floor(Math.random() * options.length)];
        if (pChoice == compChoice){
            return "Tie";
        } else if (
            (pChoice == "rock" && compChoice == "scissors") ||
            (pChoice == "paper" && compChoice == "rock") ||
            (pChoice == "scissors" && compChoice == "paper")
        ){
            return "Player";
        } else{
            return "Computer";
        }
    }
    
    playerDisplay.textContent = `Player: ${playerChoice}`


    function game(){
        for (i=0; i<5;i++){
    const pChoice = "rock";
    const compChoice = getCompChoice;
    console.log(oneRound(pChoice,compChoice));
}
}
