

// 1. Toggle active class after clicking on one of the images. Can't click on more than 1 mood.

const cards = document.getElementsByClassName("card");
const activeCard = document.getElementsByClassName("active");

const messageHappy = "Nice one!";
// To do: create a custom message for each mood
const message = document.querySelector(".message h3");


let moodAverage = 0;
const scoreHappy = 4;
const scoreOk = 3;
const scoreBad = 2;
const scoreAwful = 1;
// To do: average counter to calculate mood score

console.log(moodAverage);
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        if (activeCard.length === 0) {
            cards[i].classList.add("active");
            if (cards[i].querySelector("#card-happy")) {
                message.textContent = `${messageHappy} See you tomorrow!`; 
                message.style.visibility = "visible";
                moodAverage = moodAverage + scoreHappy;
                console.log(moodAverage);
                // > Display customised message
                // > Add score depending on mood
                // > Save score to local storage
            } else if (cards[i].querySelector("#card-ok")) {
                message.textContent = "Nice one! See you tomorrow!";
                message.style.visibility = "visible";
            } else {
                alert("Not done yet!");
            }
            
        } else {
            alert("You've already picked a mood for today! Come back tomorrow");
            // To do: create a modal to show instead of Alert
        }
    });
};




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