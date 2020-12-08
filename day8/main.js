const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  let resultOne = 0;
  let resultTwo = 0;

  ({ accumulator } = testInputForSuccess(input));
  resultOne = accumulator;

  var foundSuccess = false;
  var lastChangedIndex = -1;
  while (!foundSuccess) {
    ({ inputWithChange, changedIndex } = getInputWithNewChange(input, lastChangedIndex));
    lastChangedIndex = changedIndex;
    
    ({ success, accumulator } = testInputForSuccess(inputWithChange));
    foundSuccess = success;
  }
  resultTwo = accumulator;

  resultOneElement.innerHTML = resultOne;
  resultTwoElement.innerHTML = resultTwo;
}

function getInputWithNewChange(input, latestChangedIndex) {
  var indexToChange = findNextIndexToChange(input, latestChangedIndex);
  var inputCopy = getArrayCopy(input);
  var inputRowToChange = inputCopy[indexToChange];
  changeInput(inputRowToChange);

  return { inputWithChange: inputCopy, changedIndex: indexToChange };
}

function getArrayCopy(input) {
  return JSON.parse(JSON.stringify(input));
}

function findNextIndexToChange(input, latestChangedIndex) {
  return input.findIndex(
    (inputRow, index) =>
      (inputRow.action == "nop" || inputRow.action == "jmp") &&
      index > latestChangedIndex
  );
}

function changeInput(inputRowToChange) {
  if (inputRowToChange.action === "nop") inputRowToChange.action = "jmp";
  else if (inputRowToChange.action === "jmp") inputRowToChange.action = "nop";
}

function testInputForSuccess(input) {
  var visitedIndexes = [];
  var accumulator = 0;
  var index = 0;

  while (index >= 0 && index < input.length) {
    if (visitedIndexes.includes(index)) break;

    visitedIndexes.push(index);
    const actionRow = input[index];
    ({ index, accumulator } = doAction(actionRow, index, accumulator));
  }

  const success = index === input.length;
  return { success, accumulator };
}

function doAction(actionRow, index, accumulator) {
  switch (actionRow.action) {
    case "nop":
      index++;
      break;
    case "acc":
      accumulator += actionRow.value;
      index++;
      break;
    case "jmp":
      index = index + actionRow.value;
      break;
    default:
      break;
  }

  return { index, accumulator };
}

function log(string) {
  console.log(string);
}

// calc();
calc(input);
// calc(inputTest);
