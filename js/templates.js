function createQuestionCard(currentQuestion, allQuestions) {
  return `
    <div class="card question-card">
        <img src="./img/school-5552639_1280.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${questions[currentQuestion].question}</h5>
            <div class="card mb-2">
                <div class="card-body answer">
                    ${questions[currentQuestion].answer_1}
                </div>
            </div>
            <div class="card mb-2">
                <div class="card-body answer">
                    ${questions[currentQuestion].answer_2}
                </div>
            </div>
            <div class="card mb-2">
                <div class="card-body answer">
                    ${questions[currentQuestion].answer_3}
                </div>
            </div>
            <div class="card mb-2">
                <div class="card-body answer">
                    ${questions[currentQuestion].answer_4}
                </div>
            </div>
            <div class="question-footer mt-3">
                <span>
                    Question <span id="current-q">${currentQuestion + 1}</span> of <span id="all-q">${allQuestions}</span>
                </span>
                <a href="#" class="btn btn-primary">Next question</a>
            </div>
        </div>
    </div>
    `;
}
