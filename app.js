

// 1. Toggle active class after clicking on one of the images. Can't click on more than 1 mood.

const cards = document.getElementsByClassName("card");
const activeCards = document.getElementsByClassName("active");

const message = document.querySelector(".message h3");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        if (activeCards.length === 0) {
            cards[i].classList.add("active");
            message.textContent = "Nice one! See you tomorrow!"; // Customise depending on mood picked
            message.style.visibility = "visible";
        } else {
            alert("You've already picked a mood for today! Come back tomorrow");
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