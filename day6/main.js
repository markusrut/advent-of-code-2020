const resultOneElement = document.getElementById("result-one");
const resultTwoElement = document.getElementById("result-two");

function calc(input) {
  const grpAnswersMapped = input.map((group) =>
    group.map((person) => getPersonAnswers(person))
  );

  var answersForAnyoneInGrpSum = 0;
  var answersForEveryoneInGrpSum = 0;

  grpAnswersMapped.forEach((group) => {
    answersForAnyoneInGrpSum += getGroupAnswersForAnyone(group).length;
    answersForEveryoneInGrpSum += getGroupAnswersForEveryone(group).length;
  });

  resultOneElement.innerHTML = answersForAnyoneInGrpSum;
  resultTwoElement.innerHTML = answersForEveryoneInGrpSum;
}

function getGroupAnswersForAnyone(group) {
  var grpAnswers = [];
  
  group.forEach((personAnswers) => {
    personAnswers.forEach((a) => {
      if (!grpAnswers.includes(a)) grpAnswers.push(a);
    });
  });

  return grpAnswers;
}

function getGroupAnswersForEveryone(group) {
  var groupAnswers = group[0];

  group.forEach((personAnswers) => {
    groupAnswers = groupAnswers.filter((a) => personAnswers.includes(a));
  });

  return groupAnswers;
}

function getPersonAnswers(personStr) {
  const personAnswers = [];
  for (let i = 0; i < personStr.length; i++) {
    personAnswers.push(personStr[i]);
  }
  return personAnswers;
}

calc(input);
// calc(inputTest);
// calcPartTwo(inputTest);
// calcPartTwo(input);
