'use strict';

// Задание 1

function getSolutions(a, b, c) {

  let x1, x2;
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return { D };
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return { roots: { x1 }, D };
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { roots: {x1, x2}, D };
    }
  }

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots.x1}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots.x1}, X₂ = ${result.roots.x2}`);
  }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(2,4,2);
showSolutionsMessage(7,20,-3);

// Задание 2

let keyToShyfre1 = {
  aaa: 0,
  bbb: 0
}
let keyToShyfre2 = {
  aaa: 0,
  bbb: 1
}
let keyToShyfre3 = {
  aaa: 1,
  bbb: 0
}
let keyToShyfre4 = {
  aaa: 1,
  bbb: 1
}

function getPersonData(secretData) {

  function getPersonName(number) {
    return (number === 0) ? 'Родриго' : 'Эмильо';
  }

  return { firstName: getPersonName(secretData.aaa),
    lastName: getPersonName(secretData.bbb)
  };

}

console.log(getPersonData(keyToShyfre1));
console.log(getPersonData(keyToShyfre2));
console.log(getPersonData(keyToShyfre3));
console.log(getPersonData(keyToShyfre4));

// Задание 3

function getAverageScore(data) {
  let marksAverage = new Object();
  let marksSummary = 0;
  let counter = 0;

  for (let prop in data) {
    marksAverage[prop] = countAverageValue(data[prop]);
    marksSummary += countAverageValue(data[prop]);
    counter++;
    console.log(`${prop}: ${marksAverage[prop]}`);
  }
  let marksAverageTotal = marksSummary / counter;
  console.log(`average: ${marksAverageTotal}`);
}

function countAverageValue(args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[ i ];
  }
  return total / args.length;
}

getAverageScore({
  algebra: [3, 3, 4, 3, 5, 4, 4, 3],
  russian: [4, 5, 3, 5, 5, 5, 3, 4],
  geometry: [5, 4, 5, 5, 4, 4, 3, 3],
  literature: [3, 3, 4, 3, 5, 3, 3, 4],
  physics: [4, 5, 4, 5, 3, 3, 4, 5],
  chemistry: [5, 5, 5, 4, 5, 4, 5, 5],
  english: [4, 4, 4, 5, 4, 3, 5, 4],
  geography: [5, 4, 4, 5, 4, 5, 5, 5],
  french: [3, 4, 4, 4, 4, 3, 4, 3],
  biology: [5, 3, 3, 4, 3, 4, 4, 4]
});
