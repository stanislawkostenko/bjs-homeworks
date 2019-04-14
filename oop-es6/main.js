// Task 1

class Weapon {

    constructor(object) {
        this.name = object.name;
        this.attack = object.attack;
        this.durability = object.durability;
        this.range = object.range;
        this.defaultDurability = object.durability;
    }

    takeDamage(damage) {
        if (damage <= this.durability) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability >= (this.defaultDurability * 0.3)) {
            return this.attack;
        } else if (this.durability == 0) {
            return 0;
        } else {
            return this.attack /= 2;
        }
    }

    isBroken() {
        return this.durability == 0;
    }

}

const oldSword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1
})

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1
})

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2
})

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4
})

const battleAxe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range
})

const stormStaff = new Weapon({
  name: 'Посох бури',
  attack: 10,
  durability: staff.durability,
  range: 3
})



oldSword.takeDamage(5);
console.log(oldSword.durability);
oldSword.takeDamage(50);
console.log(oldSword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);



console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(bow.getDamage());



console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false

// Task 2

class Saber extends Weapon {
    constructor() {
        super({
            name: 'Сабля',
            attack: 22,
            durability: 40,
            range: 1
          });
        }
      };

const catana = new Saber();

console.log(catana.name);
console.log(catana.attack);
console.log(catana.durability);
console.log(catana.range);

// Task 3

class StudentLog {

  constructor(name) {
    this.name = name;
    this.grade = new Array();
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if ((grade > 5) || (grade < 1)) {
      console.log(`Ошибка! Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допустимый формат оценки: 0-5.`);
      return this.grade.length;
    }
    if (grade === String(grade)) {
      this.grade = [];
      console.log(`Ошибка! Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допустимый формат оценки: 0-5.`);
      return this.grade.length;
    }
    this.grade.push({grade: grade, subject: subject});
    return this.grade.length;
  }



/* В МЕТОДАХ НИЖЕ Я ЗАПУТАЛСЯ */



  getAverageBySubject(subject) {
    if (subject === this.grade.subject) {
      if (this.grade.length === 0) {
        return 0;
      }
      let average = 0;
      for (let i = 0; i < this.grade.subject.length; i++) {
        average += this.grade.subject[i];
      }
      average = average / this.grade.subject.length;
      return average;
    }
  }

  // getTotalAverage() {
  //   let sum = 0;
  //   for (let i = 0; i < this.grade.length; i++) {
  //     sum += this.grade[i];
  //   }
  //   return sum / this.grade.length;
  // }

  getTotalAverage() {
     let marksSummary = 0;
     let counter = 0;

     for (let prop in this.grade) {
       this.grade[prop] = countAverageValue(this.grade[prop]);
       marksSummary += this.grade[prop];
       counter++;
     }

      let marksAverageTotal = marksSummary / counter;
     this.grade["average"] = marksAverageTotal;
     return this.grade;

      function countAverageValue(args) {
       let total = 0;
       for (let i = 0; i < args.length; i++) {
         total += args[ i ];
       }
       return total / args.length;
     }
   }

}



const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(4, "algebra"));
console.log(log.addGrade(9, "algebra"));
console.log(log.addGrade("отлично", "algebra"));

log.addGrade(4, "algebra");
log.addGrade(4, "algebra");
log.addGrade(5, "algebra");
log.addGrade(3, "algebra");
log.addGrade(3, "russian");
log.addGrade(5, "russian");
log.addGrade(3, "russian");
log.addGrade(3, "russian");

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('russian'));
console.log(log.getAverageBySubject('english'));

console.log(log.getTotalAverage());
