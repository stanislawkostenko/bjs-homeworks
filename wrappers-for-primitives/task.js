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

    // код для задачи №1 писать здесь
    //return totalAmount;
}

// Task 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  
    if (name = String(name)) {
      return `Привет, мир! Меня зовут ${name}.`;
      console.log(`Привет, мир! Меня зовут ${name}.`);
    } else {
      return `Аноним`;
      console.log(`Аноним`);
    }
}
