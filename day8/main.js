const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  let resultOne = 0;
  let resultTwo = 0;

  var visitedIndexes = [];
  var accumulator = 0;
  var index = 0;
  while (index >= 0 && index < input.length) {
    if (visitedIndexes.includes(index)) break;

    visitedIndexes.push(index);
    const actionRow = input[index];

    log(visitedIndexes);
    log(actionRow);

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
    log(index);
  }

  resultOneElement.innerHTML = accumulator;
  resultTwoElement.innerHTML = resultTwo;
}

function log(string) {
  console.log(string);
}

// calc();
calc(input);
// calc(inputTest);
