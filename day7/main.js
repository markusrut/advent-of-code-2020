const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc() {
  let resultOne = 0;
  let resultTwo = 0;

  let colorToCheck = "shiny gold";
  var containsCorrectColor = [];
  containsCorrectColor = checkAllBagsForColor(colorToCheck, containsCorrectColor);
  resultOne = containsCorrectColor.length;

  resultOneElement.innerHTML = resultOne;
  resultTwoElement.innerHTML = resultTwo;
}

function checkAllBagsForColor(colorToCheck, containsCorrectColor) {
  input.forEach((bag) => {
    bag.contain.forEach((b) => {
      let colorMatch = b.color === colorToCheck;
      let notAlreadyInList = !containsCorrectColor.includes(bag.color);
      if (colorMatch && notAlreadyInList) {
        containsCorrectColor.push(bag.color);
        containsCorrectColor = checkAllBagsForColor(bag.color, containsCorrectColor);
      }
    });
  });
  return containsCorrectColor;
}

function log(string) {
  // console.log(string);
}

calc();

// calc(input);
