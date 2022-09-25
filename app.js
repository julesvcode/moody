

// 1. Toggle active class after clicking on one of the images

// const cardClick = document.getElementById("card-happy");
const cards = document.getElementsByClassName("card");
console.log(cards);

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        cards[i].classList.add("active");
    });  
};




// 2. Display message after picking mood / customise it depending on mood selected

// 3. Timing
//      3.a. only let people pick one mood per day - add to localStorage
//      3.b. update page every day - Date() object

// 4. Analytics:
//      3.a. count clicks on different moods to calculate average
//      4.b. Give people results: 
//           "The past week you've been mainly feeling ______" / "And since you started tracking your mood you've been feeling ____"
//      4.c. display stats after clicking on button