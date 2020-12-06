const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  var questionSum = 0;

  input.forEach((grp) => {
    questionSum += getGroupQuestionSum(grp);
  });

  resultOneElement.innerHTML = questionSum;
}

function getGroupQuestionSum(grp) {
  grpAnswers = [];
  grp.forEach((answers) => {
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      if (!grpAnswers.includes(answer)) grpAnswers.push(answer);
    }
  });
  console.log(grpAnswers);
  return grpAnswers.length;
}

calc(input);
// calc(input);
// calcPartTwo(inputTest);
// calcPartTwo(input);
