/*# Homework 1

There is a JSON file with students. Make a call to the file and get the following data from it:

- All students with an average grade higher than 3
- All female student names with an average grade of 5
- All male student full names who live in Skopje and are over 18 years old
- The average grades of all female students over the age of 24
- All male students with a name starting with B and average grade over 2

Use higher order functions to find the answers
**Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
*/

const dataUrl = `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`;

const fetchDataBeta = (dataUrl) => {
  fetch(dataUrl)
    .then((result) => result.json())
    .then((data) => {
      //All students with an average grade higher than 3
      studentsAverageAboveThree(data);
      //- All female student names with an average grade of 5
      femalesAverageGradeOdFive(data);
      //- All male student full names who live in Skopje and are over 18 years old
      maleFullNamesSk(data);
      //- The average grades of all female students over the age of 24
      averageGradesFemales(data);
      //- All male students with a name starting with B and average grade over 2
      maleStudentsNameB(data);

    });
};

//All students with an average grade higher than 3
function studentsAverageAboveThree(data) {
  const res = data.filter((student) => student.averageGrade > 3);

  console.log(`This is the array of students with an average grade higher than 3 `, res);
  return res;
}


//- All female student names with an average grade of 5

function femalesAverageGradeOdFive(data) {
  const res = data.filter((student) => student.averageGrade === 5 && student.gender === "Female").map((student) => `${student.firstName}`);

  console.log(`The female student names with an average grade of 5`, res);
  return res;
}

//- All male student full names who live in Skopje and are over 18 years old

function maleFullNamesSk(data) {
  const res = data
    .filter((student) => student.city === "Skopje" && student.gender === "Male" && student.age > 18)
    .map((student) => `${student.firstName} ${student.lastName}`);
  console.log(`The male students from Skopje over 18 years old are`, res);
}

//- The average grades of all female students over the age of 24
function averageGradesFemales(data) {
  const res = data.filter((student) => student.gender === "Female" && student.age > 24).map((student) => student.averageGrade);

  console.log(`The average grades of all female students over the age of 24 is `, res);
}

//- All male students with a name starting with B and average grade over 2

function maleStudentsNameB(data) {
  const res = data.filter((student) => student.firstName.charAt(0) === "B" && student.averageGrade > 2 && student.gender === "Male");

  console.log(`All male students with a name starting with B and average grade over 2`, res);
}

fetchDataBeta(dataUrl);
