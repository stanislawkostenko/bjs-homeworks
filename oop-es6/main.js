// Task 1

class StudentLog {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    this.grade = grade;
    this.subject = subject;
    if ((grade > 5) || (grade === String(grade))) {
      return (`Ошибка! Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допустимый формат оценки: 0-5.`);
    }
    return (`${subject}: ${grade}`);
  }

  getAverageBySubject(subject) {
    if (!subject) {
      return 0;
    } else {
      let average = 0;
      for (let i = 0; i < this.grade.length; i++) {
        average += this.grade[i];
      }
      average = average / this.grade.length;
      return (`${subject}: ${average}`);
    }
  }

  getTotalAverage() {
    let marksAverage = new Object();
    let marksSummary = 0;
    let counter = 0;

    let marksAverageTotal = marksSummary / counter;
    marksAverage["average"] = marksAverageTotal;
    return marksAverage;

    function countAverageValue(args) {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[ i ];
      }
      return total / args.length;
    }
  }

  getGradesBySubject(subject) {
    if (!subject) {
      return this.grade = [];
    } else {
      this.grade = new Array();
      return (`${subject}: ${this.grade}`)
    }
  }

  getGrades() {
    if (!this.subject) {
      return this.grade = [];
    } else {
      let allGrades = new Object();
      this.grade = new Array();
      return allGrades = {
        subject: this.grade
      }
    }
  }

}



let log = new StudentLog('Олег Никифоров');
log.addGrade(4, "algebra");
log.addGrade(3, "algebra");
log.addGrade(3, "russian");
log.addGrade(5, "russian");

console.log(log.getName());

console.log(log.addGrade(4, "algebra"));
console.log(log.addGrade(9, "algebra"));
console.log(log.addGrade("отлично", "algebra"));

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('russian'));
console.log(log.getAverageBySubject('english'));

console.log(log.getTotalAverage());

console.log(log.getGradesBySubject('algebra'));
console.log(log.getGradesBySubject('russian'));
console.log(log.getGradesBySubject('english'));

console.log(log.getGrades());
