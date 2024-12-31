


// Select the button and counter display elements
const yamButton = document.getElementById('yamButton');
const yamCounterDisplay = document.getElementById('yamCounterDisplay');

const clickPowerbutton = document.getElementById('clickPowerButton');

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

// this is the start of click upgrades
clickPowerButton1.addEventListener('click', () => {
    
    if (money >= clickPowerCost1) {
    perClick = perClick + 1
    money = money - clickPowerCost1
    moneyDisplay.textContent = money;

    clickPowerDisplay.textContent = perClick;
  
  }});
  function hideButton1() {
    if (money >= clickPowerCost1) {
    let hiddenButton = document.getElementById('clickPowerButton1')
    let hiddenText = document.getElementById('costClickPower1')
    let shownButton = document.getElementById('clickPowerButton2')
    let shownText = document.getElementById('costClickPower2')
        hiddenText.style.display = 'none'; 
        hiddenButton.style.display = 'none'; 
        shownButton.style.display = 'block';
        shownText.style.display = 'block';
      }}

clickPowerButton2.addEventListener('click', () => {
    
        if (money >= clickPowerCost2) {
        perClick = perClick * 2
        money = money - clickPowerCost2
        moneyDisplay.textContent = money;
        
        clickPowerDisplay.textContent = perClick;
      
      }});
function hideButton2() {
        if (money >= clickPowerCost1) {
        let hiddenButton = document.getElementById('clickPowerButton2')
        let hiddenText = document.getElementById('costClickPower2')
        let shownButton = document.getElementById('clickPowerButton3')
        let shownText = document.getElementById('costClickPower3')
            hiddenText.style.display = 'none'; 
            hiddenButton.style.display = 'none'; 
            shownButton.style.display = 'block';
            shownText.style.display = 'block';
          }}
    
clickPowerButton3.addEventListener('click', () => {
    
            if (money >= clickPowerCost3) {
            perClick = perClick * 2
            money = money - clickPowerCost3
            moneyDisplay.textContent = money;
         
            
            clickPowerDisplay.textContent = perClick;
          
          }});
function hideButton3() {
        if (money >= clickPowerCost1) {
            let hiddenButton = document.getElementById('clickPowerButton3')
            let hiddenText = document.getElementById('costClickPower3')
            let shownButton = document.getElementById('clickPowerButton4')
            let shownText = document.getElementById('costClickPower4')
                hiddenText.style.display = 'none'; 
                hiddenButton.style.display = 'none'; 
                shownButton.style.display = 'block';
                shownText.style.display = 'block';
              }}

clickPowerButton3.addEventListener('click', () => {
    
            if (money >= clickPowerCost3) {
            perClick = perClick * 2
            money = money - clickPowerCost3
            moneyDisplay.textContent = money;

            
            clickPowerDisplay.textContent = perClick;
          
          }});
function hideButton3() {
        if (money >= clickPowerCost1) {
            let hiddenButton = document.getElementById('clickPowerButton3')
            let hiddenText = document.getElementById('costClickPower3')
            let shownButton = document.getElementById('clickPowerButton4')
            let shownText = document.getElementById('costClickPower4')
                hiddenText.style.display = 'none'; 
                hiddenButton.style.display = 'none'; 
                shownButton.style.display = 'block';
                shownText.style.display = 'block';
              }}          

clickPowerButton4.addEventListener('click', () => {
    
    if (money >= clickPowerCost4) {
    perClick = perClick * 2
    money = money - clickPowerCost4
    moneyDisplay.textContent = money;

    
    clickPowerDisplay.textContent = perClick;
  
  }});
function hideButton4() {
    if (money >= clickPowerCost1) {
    let hiddenButton = document.getElementById('clickPowerButton4')
    let hiddenText = document.getElementById('costClickPower4')
    let shownButton = document.getElementById('clickPowerButton5')
    let shownText = document.getElementById('costClickPower5')
        hiddenText.style.display = 'none'; 
        hiddenButton.style.display = 'none'; 
        shownButton.style.display = 'block';
        shownText.style.display = 'block';
      }}

clickPowerButton5.addEventListener('click', () => {
    
    if (money >= clickPowerCost5) {
    perClick = perClick * 2
    money = money - clickPowerCost5
    moneyDisplay.textContent = money;

    
    clickPowerDisplay.textContent = perClick;
  
  }});
function hideButton5() {
    if (money >= clickPowerCost1) {
    let hiddenButton = document.getElementById('clickPowerButton5')
    let hiddenText = document.getElementById('costClickPower5')
    let shownButton = document.getElementById('clickPowerButton6')
    let shownText = document.getElementById('costClickPower6')
        hiddenText.style.display = 'none'; 
        hiddenButton.style.display = 'none'; 
        shownButton.style.display = 'block';
        shownText.style.display = 'block';
      }}

clickPowerButton6.addEventListener('click', () => {
    
    if (money >= clickPowerCost6) {
    perClick = perClick * 2
    money = money - clickPowerCost6
    moneyDisplay.textContent = money;
    
    clickPowerDisplay.textContent = perClick;
  
  }});
function hideButton6() {
    if (money >= clickPowerCost1) {
    let hiddenButton = document.getElementById('clickPowerButton6')
    let hiddenText = document.getElementById('costClickPower6')
    let shownButton = document.getElementById('clickPowerButton7')
    let shownText = document.getElementById('costClickPower7')
        hiddenText.style.display = 'none'; 
        hiddenButton.style.display = 'none'; 
        shownButton.style.display = 'block';
        shownText.style.display = 'block';
      }}



      //end of click upgrades
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
    wivesDisplay.textContent = yamsPS
    
   
    

}
});
