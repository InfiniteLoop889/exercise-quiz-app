function createQuestionCard(currentQuestion, allQuestions) {
  return `
    <div class="card question-card">
        <img src="./img/education-6305113_640.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${questions[currentQuestion].question}</h5>
            <div class="card answer mb-2" data-answer="1">
                <div class="card-body">
                    ${questions[currentQuestion].answer_1}
                </div>
            </div>
            <div class="card answer mb-2" data-answer="2">
                <div class="card-body">
                    ${questions[currentQuestion].answer_2}
                </div>
            </div>
            <div class="card answer mb-2" data-answer="3">
                <div class="card-body">
                    ${questions[currentQuestion].answer_3}
                </div>
            </div>
            <div class="card answer mb-2" data-answer="4">
                <div class="card-body">
                    ${questions[currentQuestion].answer_4}
                </div>
            </div>
            <div class="question-footer mt-3">
                <span>
                    Question <span id="current-q">${currentQuestion + 1}</span> of <span id="all-q">${allQuestions}</span>
                </span>
                <a href="#" id="next-question" class="btn btn-primary">Next question</a>
            </div>
        </div>
    </div>
    `;
}

function showEndScreen(state) {
  wrapperRef.innerHTML = `
    <div class="card end-card">
      <img src="./img/trophy.jpg" alt="Quiz finished" class="quiz-image" />
      <h2>Quiz completed!</h2>
      <p>You answered <strong>${state.correctAnswers}</strong> out of <strong>${state.allQuestions}</strong> questions correctly.</p>
      <button class="btn btn-primary restart-btn">Restart Quiz</button>
    </div>
  `;

  document.querySelector(".restart-btn").addEventListener("click", () => {
    state.currentQuestion = 0;
    state.selectedAnswer = null;
    state.correctAnswers = 0;
    init(state);
  });
}
