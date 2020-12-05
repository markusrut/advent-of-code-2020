const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  var highestId = 0;

  input.forEach((e) => {
    e.row = decode(e.codedSeat.substring(0, 7));
    e.col = decode(e.codedSeat.substring(7, 10));
    e.seatId = e.row * 8 + e.col;

    if (e.seatId > highestId) highestId = e.seatId;
  });

  resultOneElement.innerHTML = highestId;

  var seatIds = getSortedSeatIds(input);

  resultTwoElement.innerHTML = getEmptySeatId(seatIds);
}

function getEmptySeatId(seatIds) {
  var emptySeatId = 0;
  var previousSeatId = 0;

  seatIds.forEach(currentSeatId => {
    if (previousSeatId != currentSeatId - 1) {
      emptySeatId = currentSeatId - 1;
    }
    previousSeatId = currentSeatId;
  });
  
  return emptySeatId;
}

function getSortedSeatIds(input) {
  return input
    .map((i) => {
      return i.seatId;
    })
    .sort((a, b) => {
      return a - b;
    });
}

function decode(code) {
  let botIndex = 0;
  let topIndex = code.length === 7 ? 127 : 7;
  let target = Math.floor((botIndex + topIndex) / 2);

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (char === "F" || char === "L") topIndex = target;
    else botIndex = target + 1;

    target = Math.floor((botIndex + topIndex) / 2);
  }

  return target;
}

calc(input);
// calc(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
