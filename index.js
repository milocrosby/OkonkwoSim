
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

// Ymas Passive growth
setInterval(() => {
yamCounter = yamCounter + yamsPS
yamCounterDisplay.textContent = yamCounter;
}, 1000);



// Yams to money
sellAllYams.addEventListener('click', () => {

    money = money + yamCounter
    yamCounter = 0
    moneyDisplay.textContent = money;
    yamCounterDisplay.textContent = yamCounter;

} )

// Yams to money
sellTenYams.addEventListener('click', () => {

    tenYams = (yamCounter * .1)
    tenYams = Math.floor (tenYams)

    money = money + tenYams
    yamCounter = yamCounter - tenYams
    moneyDisplay.textContent = money;
    yamCounterDisplay.textContent = yamCounter;

} )


clickPowerButton.addEventListener('click', () => {
    
    if (money >= clickPowerCost) {
    perClick = perClick + 1
    money = money - clickPowerCost
    moneyDisplay.textContent = money;
    clickPowerCost = clickPowerCost * 1.5
    clickPowerCost = Math.floor (clickPowerCost)
    
    clickPowerCostDisplay.textContent = clickPowerCost; 
}
    clickPowerDisplay.textContent = perClick;
});

wivesButton.addEventListener('click', () => {
    
    if (money >= wivesCostMoney && yamCounter >= wivesCostYams)  {
    yamsPS = yamsPS + 1
    yamsPSDisplay.textContent =   yamsPS

    money = money - wivesCostMoney
    yamCounter = yamCounter - wivesCostYams
    moneyDisplay.textContent = money;
    yamCounterDisplay.textContent = yamCounter;

    wivesCostMoney = wivesCostMoney * 1.1
    wivesCostMoney = Math.floor (wivesCostMoney)
    wivesCostYams = wivesCostYams * 1.1
    wivesCostYams = Math.floor (wivesCostYams)

    wivesCostMoneyDisplay.textContent = wivesCostMoney
    wivesCostYamsDisplay.textContent = wivesCostYams

    
   
    

}
});
