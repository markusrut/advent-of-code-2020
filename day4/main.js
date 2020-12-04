const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calcPartOne(input) {
  let validCount = 0;
  input.forEach((passport) => {
    if (isValid(passport)) validCount++;
  });
  resultOneElement.innerHTML = validCount;
}

function isValid(p) {
  if (p.byr && p.iyr && p.eyr && p.hgt && p.hcl && p.ecl && p.pid) return true;
}

// calcPartOne(inputTest);
calcPartOne(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
