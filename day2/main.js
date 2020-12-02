
const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calcPartOne(input) {
  var validCount = 0;
  input.forEach((x) => {
    if (passwordContainsCharCount(x.low, x.high, x.char, x.password)) validCount++;
  });
  resultOneElement.innerHTML = validCount;
}

function passwordContainsCharCount(low, high, char, password) {
  const charCount = (password.match(new RegExp(char, "g")) || []).length;
  return charCount >= low && charCount <= high ? true : false;
}

function calcPartTwo(input) {
  var validCount = 0;
  input.forEach((x) => {
    if (passwordContainsSingleCharPlacement(x.low, x.high, x.char, x.password)) validCount++;
  });
  resultTwoElement.innerHTML = validCount;
}

function passwordContainsSingleCharPlacement(first, second, char, password) {
  var matchCount = 0;

  if (password[first-1] === char)
  matchCount++
  
  if (password[second-1] === char)
  matchCount++

  return matchCount === 1;
}

calcPartOne(input);
calcPartTwo(input);
