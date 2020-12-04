const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  let validParams = 0;
  let validValues = 0;
  input.forEach((passport) => {
    if (isValid(passport)) {
      validParams++;
      if (isValidValues(passport)) validValues++;
    }
  });
  resultOneElement.innerHTML = validParams;
  resultTwoElement.innerHTML = validValues;
}

function isValid(p) {
  if (p.byr && p.iyr && p.eyr && p.hgt && p.hcl && p.ecl && p.pid) return true;
}
function isValidValues(p) {
  const validEcl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  if (p.byr >= 1920 && p.byr <= 2002)
    if (p.iyr >= 2010 && p.iyr <= 2020)
      if (p.eyr >= 2020 && p.eyr <= 2030)
        if (testHeight(p.hgt))
          if (RegExp("#[0-9a-f]{6}").test(p.hcl))
            if (validEcl.indexOf(p.ecl) > -1)
              if (p.pid.length === 9) return true;
}

function testHeight(hgt) {
  const cmLocation = hgt.indexOf("cm");
  var cmLength = hgt.substring(0, cmLocation);
  if (cmLength >= 150 && cmLength <= 193) return true;

  const inLocation = hgt.indexOf("in");
  var inLength = hgt.substring(0, inLocation);
  if (inLength >= 59 && inLength <= 76) return true;
}

// calcPartOne(inputTest);
calc(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
