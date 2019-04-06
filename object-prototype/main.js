// Task 1

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = +new Date();
    userBirthday = new Date(2001, 1, 21);
    userBirthday = +new Date();
    let diff = now - userBirthday;
    let age = diff / 31536000000;
    if (age >= 18) {
      return checkBirthday(birthday) = "Да";
    } else {
      return checkBirthday(birthday) = "Нет"
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
    getAnimalSound.prototype = animal;
    let sound = animal.sound;
    if (animal = Object(undefined)) {
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
    // код для задачи №3 писать здесь
}
