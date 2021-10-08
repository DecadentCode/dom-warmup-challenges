"use strict";

//Vending Machine
{
  const totalCost = document.querySelector(".total-cost");
  const vendingMachineButtons = document.querySelectorAll(".vending-button");
  let totalCounter = 0;
  const makeMoneyForm = document.querySelector(".make-money-form");
  ("use script");
  vendingMachineButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.getAttribute("data-price");
      totalCounter += parseInt(amount);
      totalCost.textContent = `Total: $${totalCounter}.00`;
    });
  });
  // lime.addEventListener("click", (e) => {
  //   const price = button.getAttribute("data-price");
  //   totalCounter += price;
  //   totalTracker.textcontent = `Total: $${totalCounter}.00`;
  // });
}

//Make Money
const makeMoneyForm = document.querySelector(".make-money-form");
const coinsBox = document.querySelector(".coins-box");
{
  makeMoneyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const coinsNumber = document.querySelector("#coins-number").value;
    const coinsType = document.querySelector("#coins-type").value;
    for (let i = 0; i < coinsNumber; i++) {
      const newCoin = document.createElement("div");
      newCoin.classList.add("coin", coinsType);
      newCoin.addEventListener("click", () => {
        newCoin.style.display = "none";
      });
      coinsBox.append(newCoin);
    }
  });
}

//Light Bulb
const lightBulb = document.querySelector(".light-bulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");
const lightSwitches = document.querySelectorAll(".switch");
{
  onSwitch.addEventListener("click", () => {
    lightBulb.classList.add("yellow");
  });
  offSwitch.addEventListener("click", () => {
    lightBulb.classList.remove("yellow");
  });
  toggleSwitch.addEventListener("click", () => {
    lightBulb.classList.toggle("yellow");
  });
  endSwitch.addEventListener("click", () => {
    console.dir(item);
    item.disabled = true;
  });
}
