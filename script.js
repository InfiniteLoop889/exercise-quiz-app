let currentQuestion = 0;
const allQuestions = questions.length;

function init() {
  const wrapperRef = document.getElementById("wrapper");
  wrapperRef.innerHTML = createQuestionCard(currentQuestion, allQuestions);

  currentQuestion++;
}

function checkAnswer() {}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
