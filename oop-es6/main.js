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
