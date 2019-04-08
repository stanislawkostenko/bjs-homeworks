'use strict';

// Task 1

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let monthQuantity = ((new Date(date).getFullYear() * 12) - (new Date().getFullYear() * 12));
  let monthPaying = amount * (((percent / 100) / 12) + ((percent / 100) / 12) / (((1 + ((percent / 100) / 12)) ** monthQuantity) - 1));
  let totalAmount = ((monthPaying * monthQuantity) - contribution);
  console.log(totalAmount);
  return totalAmount;
}

// Task 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

    if (name) {
      console.log(`Привет, мир! Меня зовут ${name}.`);
      return `Привет, мир! Меня зовут ${name}.`;
    } else {
      console.log(`Аноним`);
      return `Аноним`;
    }
}
