// Task 1
// Create a function that render information about a movie, destructure the movie object in the argument list so that the . ( dot ) operator is not needed, after that render the movie in the html.

const movie = {
  title: "Saving Private Ryan",
  director: "Steven Spielberg",
  country: "USA",
  year: 1999,
  productionInfo: {
    budget: "70 million",
    producer: "Ian Bryce",
  },
};

const {
  title,
  director,
  country,
  year,
  productionInfo: { budget, producer },
} = movie;

const movieDestr = ({
  title,
  director,
  country,
  year,
  productionInfo: { budget, producer },
}) => {
  document.querySelector(
    `.taskOne`
  ).innerText = `The movie ${title}, directed by ${director} from ${country} in ${year} had budget ${budget}$. Produced by ${producer}.`;
};

movieDestr(movie);

// Task 2
// Given the below arrays, combine them all to create one main array caleed plants, the order is up to the student

const fruits = ["apples", "oranges", "lemons"];

const vegetables = ["broccoli", "carrots", "cabbage"];

const nuts = ["peanuts", "almonds", "walnuts", "hazelnuts"];

const plants = [...fruits, ...vegetables, ...nuts];
console.log(plants);

// Task 3
// Create a Person class that has:

// firstName
// lastName
// age
// getFullName - method that returns the full name
// Create a Student class that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student instances

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const test = new Person("man", "small", 34);
test.getFullName();

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentId = studentId;
  }
  // study - method that writes in the console: The student firstName is studying in the academyName
  // Create two Student instances

  study() {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName}`
    );
  }
}

const studentOne = new Student("One", "Man", 22, "SEDC", 2252);
const studentTwo = new Student("Two", "Man", 55, "Quinshift", 2252);
studentOne.study();
studentTwo.study();

// Task 4
// Create DesignStudent, CodeStudent and NetworkStudent class that inherit from the Student class.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// CodeStudent
// hasIndividualProject - boolean (not settable, default is false)
// hasGroupProject - boolean (not settable, default is false)
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students

class DesignStudent extends Student {
  constructor(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    super(firstName, lastName, age, "Design", studentId);
    this.isStudentOfTheMonth = isStudentOfTheMonth;
  }

  attendAdobeExam() {
    console.log(`The student ${this.firstName} is doing an adobe exam!`);
  }
}

const designer = new DesignStudent(
  "DizajnerSpustajner",
  "sadsadad",
  34,

  2222,
  false
);
designer.attendAdobeExam();
console.log(designer);

// CodeStudent
// hasIndividualProject - boolean (not settable, default is false)
// hasGroupProject - boolean (not settable, default is false)
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

class CodeStudent extends Student {
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age, "Code Student", studentId);
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
  }

  doProject(input) {
    if (input === "individual") {
      this.hasIndividualProject = true;
    }
    if (input === "group") {
      this.hasGroupProject = true;
    }
  }
}

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, studentId, academyPart) {
    super(firstName, lastName, age, "Network Student", studentId);
    this.academyPart = academyPart;
  }
  attendCiscoExam() {
    console.log(`The student ${this.firstName} is doing cisco exam!`);
  }
}
