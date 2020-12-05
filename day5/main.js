const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calcPartOne(input) {
  var highestId = 0;

  input.forEach((e) => {
    e.row = decode(e.codedSeat.substring(0, 7));
    e.col = decode(e.codedSeat.substring(7, 10));
    e.seatId = e.row * 8 + e.col;

    if (e.seatId > highestId) highestId = e.seatId;

    // console.log(e);
  });

  resultOneElement.innerHTML = highestId;
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

calcPartOne(input);
// calc(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
