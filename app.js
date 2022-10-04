

// 1. Toggle active class after clicking on one of the images. Can't click on more than 1 mood.

const cards = document.getElementsByClassName("card");
const activeCard = document.getElementsByClassName("active");

const modal = document.getElementById("alertModal");
const modalClose = document.getElementsByClassName("close")[0];

// Mood cards
const moodHappy = document.getElementById("card-happy");
const moodOk = document.getElementById("card-ok");
const moodBad = document.getElementById("card-bad");
const moodAwful = document.getElementById("card-awful");

// Mood messages
const message = document.querySelector(".message h3");
const messageHappy = "Nice one!";
const messageOk = "Alright!";
const messageBad = "We all have days like this!";
const messageAwful = "Noted!";


// Mood Scores
let moodScore = 0;
let moodPicks = 0;
const scoreHappy = 4;
const scoreOk = 3;
const scoreBad = 2;
const scoreAwful = 1;
// To do: average counter to calculate mood score

let savedMoodScore = localStorage.getItem("storedMoodScore");
let savedMoodPicks = localStorage.getItem("storedMoodPicks");

if(savedMoodScore) {
    moodScore = savedMoodScore;
    moodPicks = savedMoodPicks;
} 


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        if (activeCard.length === 0) {
            cards[i].classList.add("active");
            localStorage.setItem("storedMoodPicks", Number(moodPicks) + 1);
            if (cards[i].querySelector("#card-happy")) {
                message.textContent = `${messageHappy} See you tomorrow.`; 
                localStorage.setItem("storedMoodScore", Number(moodScore) + Number(scoreHappy));
            } else if (cards[i].querySelector("#card-ok")) {
                message.textContent = `${messageOk} See you tomorrow.`; 
                localStorage.setItem("storedMoodScore", Number(moodScore) + Number(scoreOk));
            } else if (cards[i].querySelector("#card-bad")) {
                message.textContent = `${messageBad} See you tomorrow.`; 
                localStorage.setItem("storedMoodScore", Number(moodScore) + Number(scoreBad));
            } else if (cards[i].querySelector("#card-awful")) {
                message.textContent = `${messageAwful} See you tomorrow.`; 
                localStorage.setItem("storedMoodScore", Number(moodScore) + Number(scoreAwful));
            }
        } else {
            modal.style.display = "block";
        }
    });
};


// Close modal

modalClose.addEventListener("click", function () {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// 1. Replace alert() with a modal
 
// 2. Display message after picking mood / customise it depending on mood selected

// 3. Timing
//      3.a. only let people pick one mood per day
//      3.b. add to localStorage
//      3.c. update page every day - Date() object

// 4. Analytics:
//      3.a. count clicks on different moods to calculate average
//      4.b. Give people results: 
//           "The past week you've been mainly feeling ______" / "And since you started tracking your mood you've been feeling ____"
//      4.c. display stats after clicking on button

// Local storage video: https://www.youtube.com/watch?v=lF4O1wvyVow&ab_channel=IanLenehan