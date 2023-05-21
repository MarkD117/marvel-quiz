const enterQuizBtn = document.getElementById('enter-quiz-btn');
const quizHomeMenu = document.getElementById('quiz-home-menu');
const difficultySelectorMenu = document.getElementById('quiz-difficulty-selection');
const easyDifficultyBtn = document.getElementById('easy-difficulty-btn');
const mediumDifficultyBtn = document.getElementById('medium-difficulty-btn');
const hardDifficultyBtn = document.getElementById('hard-difficulty-btn');
const quizReadyUpMenu = document.getElementById('quiz-readyup-menu');


/**
 * Event listener added to the quiz button on the quiz home screen
 * that listens for clicks. It will bring the user to the difficulty selection screen 
 */
enterQuizBtn.addEventListener('click', function () {
    quizHomeMenu.classList.add("hidden");
    difficultySelectorMenu.classList.remove("hidden");
})

easyDifficultyBtn.addEventListener("click", difficultySelector);
mediumDifficultyBtn.addEventListener("click", difficultySelector);
hardDifficultyBtn.addEventListener("click", difficultySelector);


function difficultySelector(event) {
    difficultySelectorMenu.classList.add("hidden");
    quizReadyUpMenu.classList.remove('hidden');
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