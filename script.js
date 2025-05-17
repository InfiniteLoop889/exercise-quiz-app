const wrapperRef = document.getElementById("wrapper");
const allQuestions = questions.length;
let currentQuestion = 0;
let selectedAnswer = null;

function init() {
  wrapperRef.innerHTML = createQuestionCard(currentQuestion, allQuestions);
  addEventListeners();
}

function addEventListeners() {
  // Eventlisteners for the answers
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", function () {
      let answerNumber = parseInt(answer.getAttribute("data-answer"));
      selectAnswer(answerNumber);
    });
  });
  // Eventlistener for the "next quesition" button
  document.getElementById("next-question").addEventListener("click", () => checkAnswer(selectedAnswer, currentQuestion));
}

function selectAnswer(answerNumber) {
  selectedAnswer = answerNumber;
  document.querySelectorAll(".answer").forEach((answer) => answer.classList.remove("selected-answer", "correct-answer", "wrong-answer"));
  document.querySelector(`.answer[data-answer="${answerNumber}"]`).classList.add("selected-answer");
}

function checkAnswer(selectedAnswer, currentQuestion) {
  console.log(currentQuestion);
  console.log(selectedAnswer);
  if (selectedAnswer === null) {
    return;
  } else {
    const correctAnswer = questions[currentQuestion].correct_answer;
    if (selectedAnswer === correctAnswer) {
      document.querySelector(`.answer[data-answer="${correctAnswer}"]`).classList.add("correct-answer");

      setTimeout(() => {
        currentQuestion++;
        wrapperRef.innerHTML = createQuestionCard(currentQuestion, allQuestions);
        addEventListeners();
      }, 1500);
    } else {
      document.querySelector(`.answer[data-answer="${selectedAnswer}"]`).classList.add("wrong-answer");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
