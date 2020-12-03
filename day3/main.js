const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calcPartOne(input) {
  const movementRight = 3;
  const movementDown = 1;
  resultOneElement.innerHTML = calcTreeCount(
    input,
    movementRight,
    movementDown
  );
}

function calcPartTwo(input) {
  let routesResult = [];
  routesResult.push(calcTreeCount(input, 1, 1));
  routesResult.push(calcTreeCount(input, 3, 1));
  routesResult.push(calcTreeCount(input, 5, 1));
  routesResult.push(calcTreeCount(input, 7, 1));
  routesResult.push(calcTreeCount(input, 1, 2));

  const sum = routesResult.reduce((prevValue, curValue) => {
    return prevValue * curValue;
  }, 1);
  console.log(sum);
}

function calcTreeCount(input, movementRight, movementDown) {
  var position = { posX: 0, posY: 0 };
  var treeCount = 0;

  while (position.posY < input.length) {
    if (isTree(input, position)) treeCount++;

    move(position, movementRight, movementDown, input);
  }

  return treeCount;
}

function move(position, movementRight, movementDown, input) {
  const rowLength = input[0].length;

  position.posX =
    position.posX + movementRight >= rowLength
      ? position.posX + movementRight - rowLength
      : position.posX + movementRight;

  position.posY += movementDown;
}

function isTree(input, position) {
  return input[position.posY][position.posX] === "#";
}

// calcPartOne(inputTest);
calcPartOne(input);
// calcPartTwo(inputTest);
calcPartTwo(input);
