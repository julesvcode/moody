// Main variables 
const cards = document.getElementsByClassName("card");
const activeCard = document.getElementsByClassName("active");
const statsButton = document.getElementById("stats__button");
const statsButtonHeader = document.getElementById("stats-icon");
const aboutButtonHeader = document.getElementById("about-icon");

// Modals
const modalMood = document.getElementById("alertModal");
const modalStats = document.getElementById("statsModal");
const modalAbout = document.getElementById("aboutModal");
const modalMoodClose = document.getElementsByClassName("close")[0];
const modalStatsClose = document.getElementsByClassName("close")[1];
const modalAboutClose = document.getElementsByClassName("close")[2];


// Mood cards
const moodHappy = document.getElementById("card-happy");
const moodOk = document.getElementById("card-ok");
const moodBad = document.getElementById("card-bad");
const moodAwful = document.getElementById("card-awful");

// List of mood cards
let cardsList = document.getElementsByClassName("cards")[0];


// Change background on hover
// moodHappy.addEventListener("mouseover", function () {
//     document.body.style.backgroundColor = "#C9EDFE";
// });

// moodOk.addEventListener("mouseover", function () {
//     document.body.style.backgroundColor = "#FFFFFF";
// });

// moodBad.addEventListener("mouseover", function () {
//     document.body.style.backgroundColor = "#F5F5F5";
// });

// moodAwful.addEventListener("mouseover", function () {
//     document.body.style.backgroundColor = "#FF874F";
// });

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

// Date
let date = new Date();
let todayDate = date.getDate();


// Local storage
let savedMoodScore = localStorage.getItem("storedMoodScore");
let savedMoodPicks = localStorage.getItem("storedMoodPicks");
let savedDate = localStorage.getItem("storedDate");
let savedMood = localStorage.getItem("storedMood");

if(savedMoodScore) {
    moodScore = savedMoodScore;
    moodPicks = savedMoodPicks;
} 

// Updates the cards on load if mood picked on previous day
if (savedMood && todayDate === Number(savedDate)) {
    cardsList.innerHTML = savedMood;
} 


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        if (activeCard.length === 0) {
            cards[i].classList.add("active");
            localStorage.setItem("storedMoodPicks", Number(moodPicks) + 1);
            localStorage.setItem("storedDate", Number(date.getDate()));
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
            modalMood.style.display = "flex";
        }
        // Checks which mood was picked and save it to localStorage
        let selectedMood = document.getElementsByClassName("cards")[0].innerHTML;
        localStorage.setItem("storedMood", selectedMood);
    });
};


// Mood stats

let stats;
const statsImage = document.getElementById("stats__image");
const statsText = document.getElementById("stats__text");
const statsIntro = document.getElementById("stats__intro");
const statsLogs = document.getElementById("stats__logs");


function currentStats () {
    // Grab latest stats
    const currentMoodScore = localStorage.getItem("storedMoodScore");
    const currentMoodPicks = localStorage.getItem("storedMoodPicks");

    // Calculate average from latest stats
    stats = Math.round(currentMoodScore / currentMoodPicks);

    // Update content of modal according to average
    if (stats === 4) {
        statsImage.src = "./assets/clouds/happy_cloud_transparent.webp";
        statsIntro.innerHTML = `Lately, <br>you've been feeling...`;
        statsText.textContent = "Fantastic!";
    } else if (stats === 3) {
        statsImage.src = "./assets/clouds/ok_cloud_transparent.webp";
        statsIntro.innerHTML = `Lately, <br>you've been feeling...`;
        statsText.textContent = "Alright..";
    } else if (stats === 2) {
        statsImage.src = "./assets/clouds/bad_cloud_transparent.webp";
        statsIntro.innerHTML = `Lately, <br>you've been feeling...`;
        statsText.textContent = "Not great..";
    } else if (stats === 1) {
        statsImage.src = "./assets/clouds/awful_cloud_transparent.webp";
        statsIntro.innerHTML = `Lately, <br>you've been feeling...`;
        statsText.textContent = "Awful :(";
    } else {
        statsImage.src = "./assets/clouds/happy_cloud_transparent.webp";
        statsIntro.innerHTML = "It looks like it's your first time here so we don't have any stats to show you yet!<br><br>Close this pop-up and log your mood over the coming days. Then come back to check your stats!";
    }
}

function currentLogs() {
    const currentMoodPicks = localStorage.getItem("storedMoodPicks");

    if (currentMoodPicks == 1) {
        statsLogs.textContent = `You've logged your mood ${currentMoodPicks} time`;
    } else if (currentMoodPicks > 1) {
        statsLogs.textContent = `You've logged your mood ${currentMoodPicks} times`;
    } else {
        statsLogs.textContent = "";
    }
}

// Stats Modal
statsButton.addEventListener("click", function () {
    modalStats.style.display = "flex";
    currentStats();
    currentLogs();
});

statsButtonHeader.addEventListener("click", function () {
    modalStats.style.display = "flex";
    currentStats();
    currentLogs();
});

modalStatsClose.addEventListener("click", function () {
    modalStats.style.display = "none";
});


// Mood modal
modalMoodClose.addEventListener("click", function () {
    modalMood.style.display = "none";
});



// About modal 
aboutButtonHeader.addEventListener("click", function () {
    modalAbout.style.display = "flex";
});

modalAboutClose.addEventListener("click", function () {
    modalAbout.style.display = "none";
});


// Close all modals by clicking anywhere 
window.onclick = function(event) {
    if (event.target == modalMood) {
        modalMood.style.display = "none";
    } else if (event.target == modalStats) {
        modalStats.style.display = "none";
    } else if (event.target == modalAbout) {
        modalAbout.style.display = "none";
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