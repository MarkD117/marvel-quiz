const enterQuizBtn = document.getElementById('enter-quiz-btn');
const quizHomeMenu = document.getElementById('quiz-home-menu');
const difficultySelectorMenu = document.getElementById('quiz-difficulty-selection');


/**
 * Event listener added to the quiz button on the quiz home screen
 * that listens for clicks. It will bring the user to the difficulty selection screen 
 */
enterQuizBtn.addEventListener('click', function () {
    quizHomeMenu.classList.add("hidden");
    difficultySelectorMenu.classList.remove("hidden");
})

function difficultySelector() {

}

function runQuiz() {

}

function nextQuestionBtn() {

}

function displayQuestions() {

}

function incrementScore() {

}

function checkAnswer() {

}

function displayResults() {

}