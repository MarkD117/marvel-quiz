const enterQuizBtn = document.getElementById('enter-quiz-btn');
const quizHomeMenu = document.getElementById('quiz-home-menu');
const difficultySelectorMenu = document.getElementById('quiz-difficulty-selection');
const easyDifficultyBtn = document.getElementById('easy-difficulty-btn');
const mediumDifficultyBtn = document.getElementById('medium-difficulty-btn');
const hardDifficultyBtn = document.getElementById('hard-difficulty-btn');
const quizReadyUpMenu = document.getElementById('quiz-readyup-menu');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizQuestionsContainer = document.getElementById('quiz-questions-container');
const currentQuestion = document.getElementById('question');
const answerButton1 = document.getElementById('answer-btn-1');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton4 = document.getElementById('answer-btn-4');
const nextQuestionBtn = document.getElementById('next-btn');

let answerButtons = document.getElementsByClassName('answer-btn');
let randomQuestions, indexOfCurrentQuestion

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

    switch (event.target.id) {
        case 'easy-difficulty-btn':
            randomQuestions = easyQuestions.sort(() => Math.random() - 0.5);
            break;
        case 'medium-difficulty-btn':
            randomQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
            break;
        case 'hard-difficulty-btn':
            randomQuestions = hardQuestions.sort(() => Math.random() - 0.5);
            break;
}
}

startQuizBtn.addEventListener('click', runQuiz);

function runQuiz() {
    quizReadyUpMenu.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    quizQuestionsContainer.classList.remove('hidden');
    
    indexOfCurrentQuestion = 0;
    displayQuestions(randomQuestions[indexOfCurrentQuestion]); 
}

function displayQuestions(question) {
    currentQuestion.innerText = question.question
    answerButton1.innerText = question.options[0].text;
    answerButton2.innerText = question.options[1].text;
    answerButton3.innerText = question.options[2].text;
    answerButton4.innerText = question.options[3].text;

    answerButton1.onclick = checkAnswer;
    answerButton2.onclick = checkAnswer;
    answerButton3.onclick = checkAnswer;
    answerButton4.onclick = checkAnswer;
}

function incrementScore() {

}

function checkAnswer(event) {
    let chosenAnswer = event.target;
    let selectedAnswer = chosenAnswer.innerText;
    let correctAnswer = randomQuestions[indexOfCurrentQuestion].answer;
    nextQuestionBtn.classList.remove('hidden');

    if (selectedAnswer === correctAnswer) {
        chosenAnswer.classList.add('correct');
        indexOfCurrentQuestion++;
    } else {
        chosenAnswer.classList.add('incorrect');
        indexOfCurrentQuestion++;
    }

    for (let i of answerButtons) {
        i.setAttribute("disabled", "disabled");
    }
}



function nextQuestion() {
    
}

function resetState() {
    
    for (let i of answerButtons) {
        i.classList.remove('correct');
        i.classList.remove('incorrect');
        i.removeAttribute("disabled", "disabled");
    }
}

function displayResults() {

}

const easyQuestions = [
    {
        question: 'What was the first Marvel movie ever made?',
        options: [
            { text: 'Iron Man',},
            { text: 'Thor',},
            { text: 'Captain America',},
            { text: 'The Incredible Hulk',}
        ],

        answer: 'Iron Man'
    },

    {
        question: "What is Black Panther's suit made of?",
        options: [
            { text: 'Titanium'},
            { text: 'Carbon Fibre'},
            { text: 'Vibranium'},
            { text: 'Kevlar'}
        ],

        answer: 'Vibranium'
    },

    {
        question: 'Which actor voices the character of Groot?',
        options: [
            { text: 'Bradley Cooper'},
            { text: 'Vin Diesel'},
            { text: 'Jeremy Renner'},
            { text: 'Mark Ruffalo'}
        ],

        answer: 'Vin Diesel'
    },

    {
        question: 'What is Korg made of?',
        options: [
            { text: 'Iron'},
            { text: 'Scissors'},
            { text: 'Paper'},
            { text: 'Rock'}
        ],

        answer: 'Rock'
    },

    {
        question: "What is Tony Stark's father's name?",
        options: [
            { text: 'Howard'},
            { text: 'Steve'},
            { text: 'James'},
            { text: 'Peter'}
        ],

        answer: 'Howard'
    },
]

const mediumQuestions = [
    {
        question: 'Which billionaire makes a cameo in Iron Man 2?',
        options: [
            { text: 'Richard Branson'},
            { text: 'Elon Musk'},
            { text: 'Mark Zuckerberg'},
            { text: 'Jeff Bezos'}
        ],

        answer: 'Elon Musk'
    },

    {
        question: "Who is Black Panther's little sister",
        options: [
            { text: 'Shuri'},
            { text: 'Okoye'},
            { text: 'Nakia'},
            { text: 'Ramonda'}
        ],

        answer: 'Shuri'
    },

    {
        question: 'What object does Goose swallow in Captain Marvel?',
        options: [
            { text: 'A transponder'},
            { text: "Fury's eye patch"},
            { text: 'The Tesseract'},
            { text: 'Ship keys'}
        ],

        answer: 'The Tesseract'
    },

    {
        question: 'What were the last words said by Thanos in Avengers: Endgame?',
        options: [
            { text: 'I am a survivor'},
            { text: 'A small price to pay for salvation'},
            { text: 'Perfectly balanced as all things should be'},
            { text: 'I am inevitable'}
        ],

        answer: 'I am inevitable'
    },

    {
        question: 'Which Avenger does Loki enslave in The Avengers?',
        options: [
            { text: 'Hawkeye'},
            { text: 'Hulk'},
            { text: 'Iron Man'},
            { text: 'Captain America'}
        ],

        answer: 'Hawkeye'
    },
]

const hardQuestions = [
    {
        question: 'What type of doctor is Dr. Strange?',
        options: [
            { text: 'Neurosurgeon'},
            { text: 'Orthopaedic surgeon'},
            { text: 'General surgeon'},
            { text: 'Cardiothoracic surgeon'}
        ],

        answer: 'Neurosurgeon'
    },

    {
        question: "What animal does Darren Cross unsuccessfully use as test subjects in Ant-Man?",
        options: [
            { text: 'Rats'},
            { text: 'Lambs'},
            { text: 'Rabbits'},
            { text: 'Goats'}
        ],

        answer: 'Lambs'
    },

    {
        question: 'Which Spongebob character does Tony call Ebony Maw in Avengers: Infinity War?',
        options: [
            { text: 'Patrick'},
            { text: "Krabs"},
            { text: 'Plankton'},
            { text: 'Squidward'}
        ],

        answer: 'Patrick'
    },

    {
        question: 'Who was the main foe in Thor: Dark World?',
        options: [
            { text: 'Malekith'},
            { text: 'Kurse'},
            { text: 'Collector' },
            { text: 'Volstagg'}
        ],

        answer: 'Malekith'
    },

    {
        question: "How many legs does Odin's horse have?",
        options: [
            { text: 'Four'},
            { text: 'Ten'},
            { text: 'Eight'},
            { text: 'Six'}
        ],

        answer: 'Eight'
    },
]