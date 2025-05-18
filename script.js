const wrapperRef = document.getElementById("wrapper");

// Object for global variables
const quizState = {
  currentQuestion: 0,
  selectedAnswer: null,
  allQuestions: questions.length,
};

function init(state) {
  wrapperRef.innerHTML = createQuestionCard(state.currentQuestion, state.allQuestions);
  addEventListeners(state);
}

function addEventListeners(state) {
  // Eventlisteners for the answers
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", function () {
      let answerNumber = parseInt(answer.getAttribute("data-answer"));
      selectAnswer(state, answerNumber);
    });
  });
  // Eventlistener for the "Next quesition" button
  document.getElementById("next-question").addEventListener("click", () => checkAnswer(state));
}

function selectAnswer(state, answerNumber) {
  state.selectedAnswer = answerNumber;
  document.querySelectorAll(".answer").forEach((answer) => answer.classList.remove("selected-answer", "correct-answer", "wrong-answer"));
  document.querySelector(`.answer[data-answer="${answerNumber}"]`).classList.add("selected-answer");
}

function checkAnswer(state) {
  if (state.selectedAnswer === null) {
    return;
  } else {
    const correctAnswer = questions[state.currentQuestion].correct_answer;
    if (state.selectedAnswer === correctAnswer) {
      document.querySelector(`.answer[data-answer="${correctAnswer}"]`).classList.add("correct-answer");

      setTimeout(() => {
        state.currentQuestion++;
        state.selectedAnswer = null;
        wrapperRef.innerHTML = createQuestionCard(state.currentQuestion, state.allQuestions);
        addEventListeners(state);
      }, 1500);
    } else {
      document.querySelector(`.answer[data-answer="${state.selectedAnswer}"]`).classList.add("wrong-answer");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init(quizState);
});
