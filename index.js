// Initialize the counter variable
let yamCounter = 0;
let perClick = 1;
// Select the button and counter display elements
const yamButton = document.getElementById('yamButton');
const yamCounterDisplay = document.getElementById('yamCounterDisplay');

const clickPowerbutton = document.getElementById('clickPowerButton');
const counterDisplay = document.getElementById('clickPowerDisplay');

// Add a click event listener to the button
yamButton.addEventListener('click', () => {
    // Increment the counter
    yamCounter = yamCounter + perClick

    // Update the displayed counter value
    yamCounterDisplay.textContent = yamCounter;
});

clickPowerButton.addEventListener('click', () => {
    
    // Increment the counter
    if (yamCounter > 9) {
    perClick = perClick + 1
    yamCounter = yamCounter - 9
    yamCounterDisplay.textContent = yamCounter;
}
    // Update the displayed counter value
    clickPowerDisplay.textContent = perClick;
});