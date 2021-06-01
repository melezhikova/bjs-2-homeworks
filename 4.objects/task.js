function Student(name, gender, age) {
    name;
    gender;
    age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [];
    for (i=0; i < marks.length; i++) {
      this.marks.push(mark); 
    }
   } else {
      for (i=0; i < marks.length; i++) {
        this.marks.push(mark); 
    }
  }
}

Student.prototype.getAverage = function (...marks) {
  let total = 0;
  for (i=0; i < this.marks.length; i++) {
      total += this.marks[i]; 
  }

  return total / this.marks.length;
}

Student.prototype.excludeStudent = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}