const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(bagList) {
  let resultOne = 0;
  let resultTwo = 0;

  let colorToCheck = "shiny gold";
  let containsCount = 0;
  bagList.forEach((bag) => {
    if (containsColor(bag, colorToCheck)) {
      containsCount++;
    }
  });
  console.log(containsCount);

  resultOneElement.innerHTML = resultOne;
  resultTwoElement.innerHTML = resultTwo;
}

function containsColor(bag, colorToCheck) {
  let canContainColor = false;
  bag.contain.forEach((c) => {
    if (c.color === colorToCheck) canContainColor = true;
  });
  return canContainColor;
}

calc(inputTest);

// calc(input);
