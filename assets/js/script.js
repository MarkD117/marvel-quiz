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
        question: "What is Black Panther's suit made of?",
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

const mediumQuestions = [
    {
        question: 'Which billionaire makes a cameo in Iron Man 2?',
        answers: [
            { text: 'Richard Branson', correct: false },
            { text: 'Elon Musk', correct: true },
            { text: 'Mark Zuckerberg', correct: false },
            { text: 'Jeff Bezos', correct: false }
        ]
    },

    {
        question: "Who is Black Panther's little sister",
        answers: [
            { text: 'Shuri', correct: true },
            { text: 'Okoye', correct: false },
            { text: 'Nakia', correct: false },
            { text: 'Ramonda', correct: false }
        ]
    },

    {
        question: 'What object does Goose swallow in Captain Marvel?',
        answers: [
            { text: 'A transponder', correct: false },
            { text: "Fury's eye patch", correct: false },
            { text: 'The tesseract', correct: true },
            { text: 'Ship keys', correct: false }
        ]
    },

    {
        question: 'What were the last words said by Thanos in Avengers: Endgame?',
        answers: [
            { text: 'I am a survivor', correct: false },
            { text: 'A small price to pay for salvation', correct: false },
            { text: 'Perfectly balanced as all things should be', correct: false },
            { text: 'I am inevitable', correct: true }
        ]
    },

    {
        question: "Which Avenger does Loki enslave in The Avengers?",
        answers: [
            { text: 'Hawkeye', correct: true },
            { text: 'Hulk', correct: false },
            { text: 'Iron Man', correct: false },
            { text: 'Captain America', correct: false }
        ]
    },
]