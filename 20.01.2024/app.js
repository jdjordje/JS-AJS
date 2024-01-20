/*Exercise 1
Make 3 functions:

Function that takes a number through a parameter and returns how many digits that number has
Function that takes a number through a parameter and returns if its even or odd
Function that takes a number through a parameter and returns if its positive or negative
Finally create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/

/*function numberLength(number) {
  number = Math.abs(number);

  return number.toString();
}*/

const numberLength = number => Math.abs(number).toString().length;

//console.log(inputLength);

//Function that takes a number through a parameter and returns if its even or odd

/*const evenOdd = (number) => {
  if (number % 2 === 0) return `Even`;
  return `ODD`;
};*/
const evenOdd = number => (number % 2 === 0 ? "Even" : "Odd");

//console.log(evenOdd(5));

//Function that takes a number through a parameter and returns if its positive or negative

/*const positiveNegative = (number) => {
  if (number > 0) return `Positive`;
  return `Negative`;
};*/

const positiveNegative = number => (number > 0 ? `Positive` : `Negative`);
//console.log(positiveNegative(0));

const generalCheck = number =>
  `The number has ${numberLength(number)} digits,${evenOdd(
    number
  )},${positiveNegative(number)}`;

//console.log(generalCheck(10));

/*Exercise 2
Create 2 variables with arrow functions.

++++First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.


Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.


Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

Ex:
**Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
*/

const headerEl = document.querySelector(`#head`);
const color = document.querySelector(`#color`);
const textSize = document.querySelector(`#textSize`);

const btn = document.querySelector(`#btn`);

const firstArrow = (element, color = "black") => {
  element.style.color = color;
};

const secondArrow = (element, textSize = 24) => {
  element.style.fontSize = `${textSize}px`;
};

btn.addEventListener(`click`, () => {
  firstArrow(headerEl, color.value);
  secondArrow(headerEl, textSize.value);
});
