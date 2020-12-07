const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc() {
  let resultOne = 0;
  let resultTwo = 0;

  const colorToCheck = "shiny gold";
  let containsCorrectColor = [];
  containsCorrectColor = checkAllBagsForContainingColor(
    colorToCheck,
    containsCorrectColor
  );

  const bag = input.find((b) => b.color === colorToCheck);
  resultTwo = getBagCount(bag);

  resultOne = containsCorrectColor.length;

  resultOneElement.innerHTML = resultOne;
  resultTwoElement.innerHTML = resultTwo;
}

function getBagCount(bag) {
  let count = 0;
  bag.content.forEach((c) => {
    count += c.count;
    const innerBag = input.find((b) => b.color === c.color)
    count += c.count * getBagCount(innerBag);
  });
  return count;
}

function checkAllBagsForContainingColor(colorToCheck, result) {
  input.forEach((bag) => {
    bag.content.forEach((b) => {
      let colorMatch = b.color === colorToCheck;
      let notAlreadyInList = !result.includes(bag.color);
      if (colorMatch && notAlreadyInList) {
        result.push(bag.color);
        result = checkAllBagsForContainingColor(bag.color, result);
      }
    });
  });
  return result;
}

function log(string) {
  console.log(string);
}

calc();

// calc(input);
