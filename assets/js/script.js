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

const easyQuestions = [
    {
        question: 'What was the first Marvel movie ever made?',
        answers: [
            { text: 'Iron Man', correct: true },
            { text: 'Thor', correct: false },
            { text: 'Captain America', correct: false },
            { text: 'The Incredible Hulk', correct: false }
        ]
    },

    {
        question: 'What is Black Panther’s suit made of?',
        answers: [
            { text: 'Titanium', correct: false },
            { text: 'Carbon Fibre', correct: false },
            { text: 'Vibranium', correct: true },
            { text: 'Kevlar', correct: false }
        ]
    },

    {
        question: 'Which actor voices the character of Groot?',
        answers: [
            { text: 'Bradley Cooper', correct: false },
            { text: 'Vin Diesel', correct: true },
            { text: 'Jeremy Renner', correct: false },
            { text: 'Mark Ruffalo', correct: false }
        ]
    },

    {
        question: 'What is Korg made of?',
        answers: [
            { text: 'Iron', correct: true },
            { text: 'Scissors', correct: false },
            { text: 'Paper', correct: false },
            { text: 'Rock', correct: false }
        ]
    },

    {
        question: "What is Tony Stark's father's name?",
        answers: [
            { text: 'Howard', correct: true },
            { text: 'Steve', correct: false },
            { text: 'James', correct: false },
            { text: 'Peter', correct: false }
        ]
    },
]
