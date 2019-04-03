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

  //data = { name: value = [] };

  for (let prop in data) {
    let value = data[prop];
    console.log(`${prop}, ${value}`)
  }

  function countMiddleValue() {
   let marksSummary = 0;
   value.forEach(function(value, index) {
   marksSummary += +value;
   console.log(marksSummary);
   });
 }

}



// function sum(...value in data) {
//   let total = 0;
//   for (let i = 0; i < value.length; i++) {
//     total += value[ i ];
//   }
//
//   let midVal = sum() / value.length;
//
// }
// console.log( sum( 2, 4, 5, 16, 7, 10, 11 )); // 55

getAverageScore({
  alg: [2, 3, 2],
  fgf: [4, 5, 2, 3, 4]
});
