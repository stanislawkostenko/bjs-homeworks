// Task 1

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = +new Date();
    let userBirthday = +new Date(birthday);
    let diff = now - userBirthday;
    let age = diff / 31536000000;
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
}

// Task 2

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (!animal) {
      return null;
    } else {
      return sound;
    }
}

// Task 3

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {

    let average = 0;
    for (let i = 0; i < marks.length; i++) {
      average += Number(marks[ i ]);
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;

}
