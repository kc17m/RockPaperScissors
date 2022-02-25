let five = document.querySelector("#five");
let ten = document.querySelector("#ten");
let fifteen = document.querySelector("#fifteen");
let twenty = document.querySelector("#twenty");
let radio = document.querySelector(".radio");

let symbolCollection = document.querySelectorAll(".symbolCollection");
console.log(symbolCollection);

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
//let symbols = document.querySelector(".symbols")


//let rockUser, paperUser, scissorsUser;

// conditional text

let letsPlay = document.querySelector(".letsPlay")
console.log(letsPlay);
let res = document.querySelector(".res") // will show results
let currentRound = document.querySelector("#currentRound");
let total = document.querySelector('#total');
let counter = -1;
let totals = 0;

//scores
let myScore = document.getElementById("myScore");
let myScoreVal = 0;
let compScore = document.getElementById("compScore");
let compScoreVal = 0;

let congrats = document.getElementById("congrats"); /// #####
let gameOver = document.getElementById("gameover"); /// #####

let master = document.getElementById("master"); ///###########

let score = 0;

// function play()

symbolCollection.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("test play");
        radio.classList.add("hidden");
        if (five.checked) {
            totals = 5;
        }
        else if (ten.checked) {
            totals = 10;
        }
        else if (fifteen.checked) {
            totals = 15;
        }
        else {
            totals = 20;
        }
        total.innerHTML = totals;

        let compTip = Math.ceil(Math.random() * 3); //computer's choice 1:rock, 2:paper, 3:scissors
        console.log("computer hat getippt: 1R, 2P, 3S: " + compTip);

        let myTip = item.id;
        console.log("myTip: " + myTip);

        if (myTip == "rock") {
            if (compTip == 1) {
                letsPlay.innerHTML = `Rock for both. No score.`
                rock.style.border = "yellow";
                rock.style.transition = "border 2s";
                console.log("myTipp & compTip = rock");
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Paper hits Rock - Computer scored.`
                rock.style.border = "1px solid red";
                console.log("compTip = rock");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
            else {
                letsPlay.innerHTML = `Paper hits Rock - You scored.`
                rock.style.border = "1px solid green";
                console.log("compTip = scissors");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;
            }
        }
        else if (myTip == "paper") {
            if (compTip == 1) {
                letsPlay.innerHTML = `Paper hits Rock. You scored.`
                paper.style.border = "1px solid green";
                console.log("compTip = rock");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Paper for both. No score.`
                paper.style.border = "1px solid yellow";
                console.log("compTip = paper");

            }
            else {
                letsPlay.innerHTML = `Scissors hits Paper - Computer scored.`
                paper.style.border = "1px solid red";
                console.log("compTip = scissors");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
        }
        else {
            if (compTip == 1) {
                letsPlay.innerHTML = `Rock hits Paper. Computer scored.`
                scissors.style.border = "1px solid red";
                console.log("compTip = rock");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Scissor hits Paper. You scored.`
                scissors.style.border = "1px solid green";
                console.log("compTip = paper");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;

            }
            else {
                letsPlay.innerHTML = `Scissors for both. No score.`
                scissors.style.border = "1px solid yellow";
                console.log("compTip = scissors");
            }

        }





        counter++;
        currentRound.innerHTML = counter;
        console.log(counter, totals);

        counter >= totals ? gameOver.classList.remove("hidden") : console.log("continue");
    });
});



// rock.addEventListener("click", () => {
//     console.log("rock has been clicked");
//     rockUser = true;
//     paperUser = false;
//     scissorsUser = false;
//     console.log(rockUser);
//     if (compTip == 1 && rockUser == true) {
//         letsPlay.innerHTML = `Rock for both. No score.`
//         rock.style.border = "1px solid yellow";
//         console.log("compTip == 1 && rockUser == true");
//     }
//     else if (compTip == 2 && rockUser == true) {
//         letsPlay.innerHTML = `Paper beats Rock. Computer scored.`
//         compScoreVal++;
//         compScore.innerHTML = compScoreVal;
//         rock.style.border = "1px solid red";
//         console.log("compTip == 2 && rockUser == true");
//     }
//     else if (compTip == 3 && rockUser == true) {
//         letsPlay.innerHTML = `Rock beats Scissors. You scored.`
//         myScoreVal++;
//         myScore.innerHTML = myScoreVal;
//         rock.style.border = "1px solid green";
//         rock.style.transition = "all 1s";
//         console.log("compTip == 3 && rockUser == true");
//     }
// })

// paper.addEventListener("click", () => {
//     console.log("paper has been clicked");
//     rockUser = false;
//     paperUser = true;
//     scissorsUser = false;
//     console.log(paperUser);
//     if (compTip == 1 && paperUser == true) {
//         letsPlay.innerHTML = `Paper beats Rock. You scored.`
//         myScoreVal++;
//         myScore.innerHTML = myScoreVal;
//         paper.style.borderColor = "green";
//         console.log("compTip == 1 && paperUser == true");
//     }
//     else if (compTip == 2 && paperUser == true) {
//         letsPlay.innerHTML = `Paper for both. No score.`
//         paper.style.borderColor = "yellow";
//         console.log("compTip == 2 && paperUser == true");
//     }
//     else if (compTip == 3 && paperUser == true) {
//         letsPlay.innerHTML = `Scissors beat Paper. Computer scored.`
//         compScoreVal++;
//         compScore.innerHTML = compScoreVal;
//         paper.style.borderColor = "red";
//         paper.style.transition = "all 1s";
//         console.log("compTip == 3 && paperUser == true");
//     }
// })

// scissors.addEventListener("click", () => {
//     console.log("scissors has been clicked");
//     rockUser = false;
//     paperUser = false;
//     scissorsUser = true;
//     console.log(scissorsUser);
//     if (compTip == 1 && scissorsUser == true) {
//         letsPlay.innerHTML = `Rock beats Scissors. Computer scored.`
//         compScoreVal++;
//         compScore.innerHTML = compScoreVal;
//         scissors.style.borderColor = "red";
//         console.log("compTip == 1 && scissorsUser == true");
//     }
//     else if (compTip == 2 && scissorsUser == true) {
//         letsPlay.innerHTML = `Scissors beat Paper. You scored.`
//         myScoreVal++;
//         myScore.innerHTML = myScoreVal;
//         scissors.style.borderColor = "green";
//         console.log("compTip == 2 && scissorsUser == true");
//     }
//     else if (compTip == 3 && scissorsUser == true) {
//         letsPlay.innerHTML = `Scissors for both. No score.`
//         rock.style.borderColor = "yellow";
//         scissors.style.transition = "all 1s";
//         console.log("compTip == 3 && scissorsUser == true")
//     }
// })

// counter++;
// currentRound.innerHTML = counter;
// console.log(counter, totals);

// counter == totals ? gameOver.classList.remove("hidden") : console.log("continue");;
// });
// });



function restart() {
    window.location.reload();
}