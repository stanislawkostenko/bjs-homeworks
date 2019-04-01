'use strict';

// Задание 1

function getSolutions(a, b, c) {
  let x1, x2;
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return {
      d: d,
    }
  } else if (d === 0) {
    x1 = -b / 2 * a;
    return {
      roots: x1,
      d: d
    }
  } else {
    x1 = (-b + Math.sqrt(d)) / 2 * a;
    x2 = (-b - Math.sqrt(d)) / 2 * a;
    return {
      roots: {
        x1: x1,
        x2: x2
      },
      d: d
    }
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${d}`);

  if (d < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (d === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${x1}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
  }
}
