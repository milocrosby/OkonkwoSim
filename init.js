// Initialize the counter variable
let yamCounter = 0;
let yamsPS = 0;
let perClick = 1;
let clickPowerCost1 = 10
let clickPowerCost2 = 50
let clickPowerCost3 = 250
let clickPowerCost4 = 1250
let clickPowerCost5 = 6250
let clickPowerCost6 = 31250
let money = 0
let tenYams= 0
let wivesCostMoney = 100
let wivesCostYams = 10

//tabs functionality

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

