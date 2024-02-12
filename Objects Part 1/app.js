// # Exercise/Homework

// ## Task 1

// Create 3 classes: Academy, Student and Subject.

// Their structure should look like this:

// ### Academy

// - name - string
// - students - array of Students
// - subjects - array of Subjects
// - start - Date when it starts
// - end - Date when it ends
// - numberOfClasses - number of subjects multipled by 10, not settable\*
// - printStudents - method that prints all students in console
// - printSubjects - method that prints all subjects in console

// ### Subject

// - title - string
// - numberOfClasses - default 10, not settable\*
// - isElective - boolean
// - academy - Academy object
// - students - array of Students
// - overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.

// ### Student

// - firstName - string
// - lastName - string
// - age - number
// - completedSubjects - emptyArray as default, not settable\*
// - academy - null as default, not settable\*
// - currentSubject - null as default, not settable\*
// - startAcademy - method that accepts Academy object that it sets to the Academy property of the student
// - startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// ## Task 2

// Make the functions **startAcademy** and **startSubject** dynamic.

// - **startAcademy** - When the student calls **startAcademy**, the student should also be added to the Academy property students ( The academy that he is starting )
// - **startSubject** - When the student calls **startSubject** the student should also be added to the Subject property students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to completedSubjects and then add the new Subject

// ## Tips

// - Not settable means that when calling the constructor function this property should not be added to the argument list.
// - Read carefully through the text before attempting any of the tasks required, take it slow and go one step at a time ( console.log like crazy through the trial and error )
// - At many places through the tasks you will need to use the `this` keyword to assign properties ex `this.academy = Academy` to assign an academy to the subject when creating a new one



class Academy {
  constructor(name, students = [], subjects = [], start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;
  }

  printStudents() {
    const studentList = this.students.map((student) => student).join(", ");
    console.log(`The students enlisted in the academy are: `, studentList);
  }

  printSubjects() {
    const subjectList = this.subjects.map((subject) => subject).join(", ");
    console.log(`The subjects are : `, subjectList);
  }
}

class Subject {
  constructor(title, isElective = false, academy = Academy, students = []) {
    this.title = title;
    this.isElective = isElective;
    this.numberOfClasses = 10;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(newClasses) {
    if (!Number.isNaN(Number(newClasses)) && newClasses > 3) {
      this.numberOfClasses = newClasses;
    } else {
      console.log(`Please insert a valid number greater than 3`);
      return;
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = null;
    this.academy = null;
    this.currentSubject = null;
  }

 
  startAcademy(newAcademy) {
    if (newAcademy instanceof Academy) {
      this.academy = newAcademy;
      this.academy.students.push(`${this.firstName} ${this.lastName}`)
    } else {
      console.log(`Academy not defined`);
    }
  }

  
  startSubject(newSubject) {
    if(newSubject instanceof Subject && this.academy.subjects.some(subject => subject === newSubject.title) && this.academy instanceof Academy){
      if(this.currentSubject === null){
        this.currentSubject = newSubject;
      }else{
        this.completedSubjects = this.currentSubject.title;
        this.currentSubject = newSubject;
      }

    }else{
      console.error(`Please define Academy`)
    }
  }
}


