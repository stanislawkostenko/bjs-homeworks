'use strict';

// Задание 1

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a, b, c) {

  let discriminant = b ** 2 - 4 * a * c;
  let rootX;

  if (discriminant < 0) {
    console.log('Корней нет');
  } else if (discriminant === 0) {
    rootX = (((-b + Math.sqrt(discriminant)) / 2 * a));
    console.log(`Корень уравнения: ${rootX}`);
    return rootX;
  } else {
    let rootX1 = (((-b + Math.sqrt(discriminant)) / 2 * a));
    let rootX2 = (((-b - Math.sqrt(discriminant)) / 2 * a));
    rootX = [];
    rootX.push(rootX1, rootX2);
    console.log(`Корни уравнения: ${rootX}`);
    return rootX;
  }
}

getResult(a,b,c);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
