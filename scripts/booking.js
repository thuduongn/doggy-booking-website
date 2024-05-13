/********* create variables *********/

let dayCounter = 0;
let costPerDay = 35;

/********* colour change days of week *********/

const dayButtons = document.querySelectorAll('.day-selector li');

function addClickedClass(button) {
    button.classList.add('clicked');
}

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let isClicked = button.classList.contains('clicked');
        addClickedClass(button);
        if (!isClicked) {
            dayCounter++;
            recalculate(dayCounter, costPerDay);
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById('clear-button');

function removeClickedClass(button) {
    button.classList.remove('clicked');
}
function clearAllButtons() {
    for (const button of dayButtons) {
        removeClickedClass(button);
    }
    dayCounter = 0;
    recalculate(dayCounter, costPerDay);
}

clearButton.addEventListener("click", clearAllButtons);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById("half");

halfButton.addEventListener('click', function() {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    costPerDay = 20;
    recalculate(dayCounter, costPerDay);
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullButton = document.getElementById("full");

fullButton.addEventListener('click', function() {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costPerDay = 35;
    recalculate(dayCounter, costPerDay);
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(dayCounter, costPerDay) {
    const costLabel = document.getElementById('calculated-cost');
    const totalCost = dayCounter * costPerDay;
    costLabel.innerHTML = totalCost;
}
