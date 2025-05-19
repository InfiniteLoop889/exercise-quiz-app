const wrapperRef = document.getElementById("wrapper");

// Object for global variables
const quizState = {
  currentQuestion: 0,
  selectedAnswer: null,
  allQuestions: questions.length,
  correctAnswers: 0,
};

function init(state) {
  // creates the first question card
  wrapperRef.innerHTML = createQuestionCard(state.currentQuestion, state.allQuestions);
  addEventListeners(state);
}

function addEventListeners(state) {
  // Eventlisteners for the answers
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", function () {
      const answerNumber = parseInt(answer.getAttribute("data-answer"));
      selectAnswer(state, answerNumber);
    });
  });
  // Eventlistener for the "Next question" button
  document.getElementById("next-question").addEventListener("click", () => checkAnswer(state));
}

function selectAnswer(state, answerNumber) {
  state.selectedAnswer = answerNumber;
  // removes the selected-answer class from the previous selected answer
  document.querySelectorAll(".answer").forEach((answer) => answer.classList.remove("selected-answer"));
  // adds the selected-answer class to the just (currently) selected
  document.querySelector(`.answer[data-answer="${answerNumber}"]`).classList.add("selected-answer");
}

function checkAnswer(state) {
  if (state.selectedAnswer === null) {
    return;
  } else {
    const correctAnswer = questions[state.currentQuestion].correct_answer;

    if (state.selectedAnswer === correctAnswer) {
      state.correctAnswers++;
      document.querySelector(`.answer[data-answer="${correctAnswer}"]`).classList.add("correct-answer");
    } else {
      document.querySelector(`.answer[data-answer="${correctAnswer}"]`).classList.add("correct-answer");
      document.querySelector(`.answer[data-answer="${state.selectedAnswer}"]`).classList.add("wrong-answer");
    }
    if (state.currentQuestion !== state.allQuestions - 1) {
      setTimeout(() => {
        loadNextQuestion(state);
      }, 1500);
    } else {
      setTimeout(() => {
        showEndScreen(state);
      }, 1500);
    }
  }
}

function loadNextQuestion(state) {
  state.currentQuestion++;
  state.selectedAnswer = null;
  wrapperRef.innerHTML = createQuestionCard(state.currentQuestion, state.allQuestions);
  addEventListeners(state);
}

document.addEventListener("DOMContentLoaded", () => {
  init(quizState);
});
