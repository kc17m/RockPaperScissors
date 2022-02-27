//selectors for radio buttons and rounds
let five = document.querySelector("#five");
let ten = document.querySelector("#ten");
let fifteen = document.querySelector("#fifteen");
let twenty = document.querySelector("#twenty");
let radio = document.querySelector(".radio");
let roundCount = document.getElementById("roundCount")

//all symbols as node list
let symbolCollection = document.querySelectorAll(".symbolCollection");
console.log(symbolCollection); //rock, paper, scissors nodelist

//single symbols for color styling
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// conditional text
let letsPlay = document.querySelector(".letsPlay")
let res = document.querySelector(".res") // will show results
console.log(res);
let currentRound = document.querySelector("#currentRound");
let total = document.querySelector('#total');
let counter = 0;
let totals = 0;

//scores with changing values 
let myScore = document.querySelector(".myScore");
let myScore2 = document.querySelector(".myScore2");
let myScoreVal = 0;
let compScore = document.querySelector(".compScore");
let compScore2 = document.querySelector(".compScore2");
let compScoreVal = 0;
console.log(compScore2, myScore2);

let welcome = document.getElementById("welcome"); /// start window
console.log(welcome);
let gameOver = document.getElementById("gameover"); /// final window, displays myScoreVal, compScoreVal + conditional message for win/lose/tie
let playButton = document.querySelector(".playButton");

let score = 0;

//optional welcome/intro window
let rockStart = document.getElementById("rockStart");
let paperStart = document.getElementById("paperStart");
let scissorsStart = document.getElementById("scissorsStart");
let yesPlease = document.querySelector(".yesPlease")
let ready = document.querySelector(".ready");

yesPlease.addEventListener("click", (e) => {
    playButton.classList.add("hidden");
    console.log("onclick?");
    welcome.classList.remove("hidden")
    let timeout = setTimeout(() => {
        rockStart.classList.remove("hidden")
    }, 2000);
    timeout = setTimeout(() => {
        paperStart.classList.remove("hidden")
    }, 4000);
    timeout = setTimeout(() => {
        scissorsStart.classList.remove("hidden")
    }, 6000);
    timeout = setTimeout(() => {
        ready.classList.remove("hidden");
    }, 8000)
    timeout = setTimeout(() => {
        welcome.classList.add("hidden");
    }, 11000)
})

// //option to ignore intro
let noThanks = document.querySelector(".nothanks");
console.log(noThanks);

noThanks.addEventListener("click", (e) => {
    playButton.classList.add("hidden");
    noThanks.classList.add("hidden");
    welcome.classList.add("hidden");
})

//actual game starts now
symbolCollection.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("test play");
        radio.classList.add("hidden");
        roundCount.classList.remove("hidden");
        playButton.classList.add("hidden");
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
        console.log("computerTip: 1R, 2P, 3S: " + compTip);

        let myTip = item.id;
        console.log("myTip: " + myTip);

        if (myTip == "rock") {
            if (compTip == 1) {
                letsPlay.innerHTML = `Tie - Rock has been picked by both of you.`
                rock.style.color = "yellow";
                rock.style.transition = "all .5s"
                console.log("myTipp & compTip = rock");
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Paper<span class="small">(computer)</span> hits Rock<span class="small">(you)</span><br>Computer scored.`
                rock.style.color = "red";
                rock.style.transition = "all .5s"
                console.log("compTip = rock");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
            else {
                letsPlay.innerHTML = `Rock<span class="small">(you)</span> hits Paper<span class="small">(computer)</span><br>You scored.`
                rock.style.color = "green";
                rock.style.transition = "all .5s"
                console.log("compTip = scissors");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;
            }
        }
        else if (myTip == "paper") {
            if (compTip == 1) {
                letsPlay.innerHTML = `Paper<span class="small">(you)</span> hits Rock<span class="small">(computer)</span><br>You scored.`
                paper.style.color = "green";
                rock.style.transition = "all .5s";
                console.log("compTip = rock");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Tie - Paper has been picked by both of you.`
                paper.style.color = "yellow";
                rock.style.transition = "all .5s";
                console.log("compTip = paper");

            }
            else {
                letsPlay.innerHTML = `Scissors<span class="small">(computer)</span> hit Paper<span class="small">(you)</span><br>Computer scored.`
                paper.style.color = "red";
                rock.style.transition = "all .5s";
                console.log("compTip = scissors");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
        }
        else {
            if (compTip == 1) {
                letsPlay.innerHTML = `Rock<span class="small">(computer)</span> hits Scissors<span class="small">(you)</span><br>Computer scored.`
                scissors.style.color = "red";
                scissors.style.transition = "all .5s";
                console.log("compTip = rock");
                compScoreVal++;
                compScore.innerHTML = compScoreVal;
            }
            else if (compTip == 2) {
                letsPlay.innerHTML = `Scissors<span class="small">(you)</span> hit Paper<span class="small">(computer)</span><br>You scored.`
                scissors.style.color = "green";
                scissors.style.transition = "all .5s";
                console.log("compTip = paper");
                myScoreVal++;
                myScore.innerHTML = myScoreVal;

            }
            else {
                letsPlay.innerHTML = `Tie - Scissors have been picked by both of you.`
                scissors.style.color = "yellow";
                scissors.style.transition = "all .51s";
                console.log("compTip = scissors");
            }
        }
        //change back symbol color to unset
        window.addEventListener("mousemove", e => {
            paper.style.color = "unset";
            paper.style.transition = "all .5s"
            rock.style.color = "unset";
            rock.style.transition = "all .5s"
            scissors.style.color = "unset";
            scissors.style.transition = "all .5s"
        })

        counter++;
        currentRound.innerHTML = counter;
        console.log(counter, totals);
        compScore2.innerHTML = `${compScoreVal}`
        myScore2.innerHTML = `${myScoreVal}`

        //check for end of game
        counter >= totals ? gameOver.classList.remove("hidden") : console.log("continue");

        if (compScoreVal < myScoreVal) {
            res.innerHTML = `Congratulations, you made it!`;
            console.log("you won");
        }
        else if (compScoreVal > myScoreVal) {
            res.innerHTML = `Not your best day today, computer scored better than you!`
            console.log("PC won");
        }
        else {
            res.innerHTML = `Equal score for both of you - I guess you give it another try!`
            console.log("tie");
        }

    });
});

//optional restart/reset
function restart() {
    window.location.reload();
}