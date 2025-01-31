// ================================================================
// rock paper scissors 
// ================================================================
// 1. get computer choice (getComputerChoice) -complete
// 1.1 random value between rock, paper, scissors -complete
// 2. get human choice (getHumanChoice) - complete
// 2.1 prompt user for R P or S -complete
// 3. Start game (playRound) where ((computerScore = 0 and humanScore = 0)
// 3.1compare computer choice to person choice
// 4. if computer choice is rock and person choice is scissors then computer wins. (computerScore + 1)
// 5. if computer choice is paper and person choice is rock then computer wins. (computerScore + 1)
// 6. if computer choice is scissors and person choice is paper then computer wins. (computerScore + 1)
// 7. if computer choice is rock and person choice is paper then person wins. (getHumanChoice + 1)
// 8. if computer choice is paper and person choice is scissors then person wins. (getHumanChoice + 1)
// 9. if computer choice is scissors and person choice is rock then person wins. (getHumanChoice + 1)
// ...


// Ex 
// function playRound(humanChoice, computerChoice) {
//     // your code here!
//   }
  
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
  
//   playRound(humanSelection, computerSelection);


// test to make sure my js file is working
// console.log("==================[ Begin: RPS!! ]======================")

// console.log("Hello! Welcome to Rock Paper Scissors!")



  // Step 3: Write the logic to get the human choice
// let answer = prompt("Please enter the weapon (R,P or S) you would like to play with: ");

// function getHumanChoice() {
//     let choice = prompt("Please enter the weapon (R,P or S) you would like to play with: ");
// console.log(choice);
    // if (choice === "R" || choice == "r") {
    //     return"HRock";}
    // else if (choice === "P" || choice == "p") {
    //     return"HPaper";} 
    // else if (choice === "S" || choice == "s") {
    //     return"HScissors";} 
    // else {
    //     return "Weapon not available! Please enter a valid weapon (R,P or S)";}
// }
// console.log(getHumanChoice())
// getHumanChoice()





// Step 2: Write the logic to get the computer choice
// function getComputerChoice() {
//     let compWeapon = Math.floor(Math.random() * 3);
//         // return "You entered: " + weapon;
//     if (compWeapon === 0) {
//         return"CRock";}
//     else if (compWeapon === 1) {
//         return"CPaper";} 
//     else if (compWeapon === 2) {
//         return"CScissors";} 
//     else {
//         return "Something has gone wrong!";}
//   }
// console.log(getComputerChoice());
// getComputerChoice()




// const humanSelection = getHumanChoice();
// console.log(humanSelection)
// const computerSelection = getComputerChoice();

  // Step 4: Declare the players score variables
// let computerScore = 0
// let humanScore = 0


// function playRound(humanChoice, computerChoice) {
//     console.log("running a round");
//     // your code here!
    // if (humanChoice === "HROCK" && computerChoice === "CScissors") {
        // console.log(humanChoice + " versus " + computerChoice);
//     }
//     // return "Since you played: " + humanChoice.toUpperCase()+ " and Computer played: " + computerChoice;
//     // if (humanChoice === "R" && computerChoice === 2) {
//     //     return "You win! Rock breaks Scissors."
//     // }
//   }

//   console.log(playRound(humanSelection, computerSelection))
//   playRound(humanSelection, computerSelection);






// console.log("==================[ Begin: RPS!! ]======================")
// console.log("Hello! Welcome to Rock Paper Scissors!")





// // human selection
// function getHumanChoice() {
//     let human = prompt("Please enter RPS");
//     // console.log("Human entered: " + human); 

//     if (human === "r") {
//         // console.log("HRock");
//         return ("HRock");
//     }
//     else if (human === "p") {
//         // console.log("HPaper");
//         return ("HPaper");
//     }
//     else if (human === "s") {
//         // console.log("HScissors");
//         return ("HScissors");
//     }
//     else {
//         // console.log("N/A")
//         return ("N/A")
//     }
// }


// // const humanSelection = getHumanChoice();
// // console.log("hvalue = " + humanSelection)



// // computer selection
// function getComputerChoice() {
//     let comp = Math.floor(Math.random() * 3);
//     // console.log("Computer entered: " + comp);

//     if (comp === 0) {
//         // console.log("CRock");
//         return ("CRock");
//     }
//     else if (comp === 1) {
//         // console.log("CPaper");
//         return ("CPaper");
//     } 
//     else if (comp === 2) {
//         // console.log("CScissors")
//         return ("CScissors")
//     } 
//     else {
//         // console.log("Does not compute!");
//         return ("Does not compute!");
//     }
// }   

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log("hvalue = " + humanSelection);
// console.log("cvalue = " + computerSelection);



// // // exit script for troubleshooting!!!
// // throw new Error("Stopping script execution");


// // rounds - all game scenarios

// let roundCounter = 0;
// let humanScore = 0;
// let computerScore = 0;


// function playRound(humanChoice, computerChoice) {
//     if 
//     (humanSelection === "HRock" && computerSelection === "CRock" ||
//     humanSelection === "HPaper" && computerSelection === "CPaper" ||
//     humanSelection === "HScissors" && computerSelection === "CScissors") 
//     {
//         // console.log("TIE!");
//         return ("TIE!");
//     }



//     else if (humanSelection === "HRock" && computerSelection === "CScissors") {
//         let a = ++humanScore;
//         // console.log("human wins, rock smashes scissors");
//         return ("human wins, rock smashes scissors");
//     }
//     else if (humanSelection === "HPaper" && computerSelection === "CRock") {
//         let a = ++humanScore;
//         // console.log("human wins, paper covers rock");
//         return ("human wins, paper covers rock");
//     }
//     else if (humanSelection === "HScissors" && computerSelection === "CPaper") {
//         let a = ++humanScore;
//         // console.log("human wins, scrissors cut paper");
//         return ("human wins, scrissors cut paper");
//     }



//     else if (humanSelection === "HRock" && computerSelection === "CPaper") {
//         let a = ++computerScore;
//         // console.log("computer wins, paper covers rock");
//         return ("computer wins, paper covers rock");
//     }
//     else if (humanSelection === "HPaper" && computerSelection === "CScissors") {
//         let a = ++computerScore;
//         // console.log("computer wins, scrissors cut paper");
//         return ("computer wins, scissors cut paper");
//     }
//     else if (humanSelection === "HScissors" && computerSelection === "CRock") {
//         let a = ++computerScore;
//         // console.log("computer wins, rock smashes scissors");
//         return ("computer wins, rock smashes scissors");
//     }


// }


// // playRound(humanSelection, computerSelection);
// console.log (playRound(humanSelection, computerSelection));



// // // exit script for troubleshooting!!!
// // throw new Error("Stopping script execution");



// let a = ++roundCounter;

// console.log("------------[ ScoreBoard!! ]------------")
// console.log("Rounds played: " + roundCounter)
// console.log(" Human:  " + humanScore + "     Computer:  " + computerScore)

// console.log("==================[ End: RPS!! ]======================")










// after several attempts, I finally got a working version!!!
console.log("==================[ Begin: RPS!! ]======================")
console.log("Hello! Welcome to Rock Paper Scissors!")

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    // console.log(choice);
    return choice 

}

function getHumanChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Please enter rock paper or scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (humanSelection == "rock" && computerSelection == "scissors")||
        (humanSelection == "paper" && computerSelection == "rock")||
        (humanSelection == "scissors" && computerSelection == "paper") 
    ){
        humanScore++;
        return `Human wins! ----> ${humanSelection} beats ${computerSelection}
Your Score: ${humanScore} ------ Computer Score:  ${computerScore}`
    }
    else {
        computerScore++;
        return `Computer wins! ---->  ${computerSelection} beats ${humanSelection}
Your Score: ${humanScore} ------ Computer Score:  ${computerScore}`
    }
    
}

function playGame(){
    console.log("Let the game begin! - Best out of 5 wins")
    console.log("Your Score: " + humanScore + "------ Computer Score: " + computerScore);
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");



    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`--------------[round ${i+1}]--------------------`);

        console.log(playRound(humanSelection, computerSelection));

        console.log(`--------------[round ${i+1}]--------------------`);

    }



    console.log("Game Over");
    console.log("-----------------------------------");

    console.log("Your Score: " + humanScore + "------ Computer Score: " + computerScore);

    if(humanScore > computerScore) {
        console.log("You won!");
    }
    else if(humanScore < computerScore) {
        console.log("You Lost! :(");
    }
    else {
        console.log("Its a tie!");
    }
}

playGame();

console.log("==================[ End: RPS!! ]======================");