const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calcPartOne(input) {
  var movementRight = 3;
  var movementDown = 1;
  var position = { posX: 0, posY: 0 };
  var treeCount = 0;

  while (position.posY < input.length) {
    if (isTree(input, position)) treeCount++;

    move(position, movementRight, movementDown, input);
  }

  resultOneElement.innerHTML = treeCount;
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
  let char = input[position.posY][position.posX];
  console.log(char);
  let isTree = char === "#";
  console.log(isTree);
  return isTree;
}

// calcPartOne(inputTest);
calcPartOne(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
