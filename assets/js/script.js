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
const quizResultsScreen = document.getElementById('quiz-results-screen');
const quizResultsText = document.getElementById('quiz-results-text');
const quizHomeBtn = document.getElementById('home-btn');

let answerButtons = document.getElementsByClassName('answer-btn');
let randomQuestions;
let indexOfCurrentQuestion;
let playerScore = 0;

/**
 * Event listener added to the quiz button on the quiz home screen
 * that listens for clicks. It will bring the user to the difficulty selection screen 
 */
enterQuizBtn.addEventListener('click', function () {
    quizHomeMenu.classList.add("hidden");
    difficultySelectorMenu.classList.remove("hidden");
})

//Difficulty buttons have event listeners that when clicked, will run the difficulty seletor function
easyDifficultyBtn.addEventListener("click", difficultySelector);
mediumDifficultyBtn.addEventListener("click", difficultySelector);
hardDifficultyBtn.addEventListener("click", difficultySelector);

/**
 * This function will remove the difficulty selector once the user has chosen a difficulty.
 * Depending on the difficulty selected by the user, the function will randomly assign 
 * questions from the array of the chosen difficulty to a variable called randomQuestions.
 * @param {Difficulty button selected by user} event 
 */
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

// Event listener added to start button that will run the runQuiz function
startQuizBtn.addEventListener('click', runQuiz);

/**
 * This is the main function that runs the quiz game. It starts by hiding the ready up menu
 * and displaying the quiz questions. It sets the index of the of the current question to 0
 * and runs the displayQuestions function. When clicking the next question button, the 
 * nextQuestion function is run. When clicking the home button, the HomeBtn function is run.
 */
function runQuiz() {
    quizReadyUpMenu.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    quizQuestionsContainer.classList.remove('hidden');
    
    indexOfCurrentQuestion = 0;
    displayQuestions(randomQuestions[indexOfCurrentQuestion]);

    
    nextQuestionBtn.onclick = nextQuestion;
    quizHomeBtn.onclick = homeBtn;
}

/**
 * This function will set the inner text of the question element to the text of the selected question in the array/object.
 * It will also set the text of the buttons to the options text in the same selected question array/object.
 * A for of loop is used to set the onclick event attribute to run the checkAnswer function for each button.
 * @param {Current object in the selected question array} question 
 */
function displayQuestions(question) {
    currentQuestion.innerText = question.question
    answerButton1.innerText = question.options[0].text;
    answerButton2.innerText = question.options[1].text;
    answerButton3.innerText = question.options[2].text;
    answerButton4.innerText = question.options[3].text;

    for (let i of answerButtons) {
        i.onclick = checkAnswer;
    }
}

/**
 * This function assigns the user selected answer and the correct answer to variables.
 * 
 * If the user's selected answer is equal to the correct answer - the selected button will have the
 * correct style applied and the playerScore/indexOfCurrentQuestion variables will be incremented.
 * 
 * If the answers do not match - the selected button will have the incorrect style applied and a for
 * of loop runs checking the innerText of the other answeButtons. When the loops finds a match with 
 * the correct answer, the correct style will be applied. The question index is then incremented.
 * 
 * Once the user selects an answer, all buttons attributes are set to disabled
 * @param {Button clicked by the user} event 
 */
function checkAnswer(event) {
    let selectedBtn = event.target;
    let selectedAnswer = selectedBtn.innerText;
    let correctAnswer = randomQuestions[indexOfCurrentQuestion].answer;
    nextQuestionBtn.classList.remove('hidden');

    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        indexOfCurrentQuestion++;
        playerScore++;
    } else {
        selectedBtn.classList.add('incorrect');
        for (let i of answerButtons) {
            if (i.innerText === correctAnswer) {
                i.classList.add('correct')
            }
        }
        indexOfCurrentQuestion++;
    }

    for (let i of answerButtons) {
        i.setAttribute("disabled", "disabled");
    }
}


/**
 * This funtion sets the quiz length to 4. If the index of the current question is greater
 * than the quizLength variable, the displayResults function is called. Otherwise,
 * the displayQuestions & resetState functions are called
 */
function nextQuestion() {
    let quizLength = 4;
    nextQuestionBtn.addEventListener('click', function(){
        if (indexOfCurrentQuestion > quizLength ) {
            displayResults()
        } else {
            displayQuestions(randomQuestions[indexOfCurrentQuestion]);
            resetState();
        }
    })
}

/**
 * This function utilises a for loop that removes correct/incorrect styles from the answer buttons.
 * It also removes the disabled attribute from the buttons allowing the user to select a new answer.
 */
function resetState() {
    
    for (let i of answerButtons) {
        i.classList.remove('correct');
        i.classList.remove('incorrect');
        i.removeAttribute("disabled", "disabled");
    }
}

/**
 * This function will hide the quiz questions and display the quiz results screen.
 * It tracks the player score and displays it to the user.
 */
function displayResults() {
    quizQuestionsContainer.classList.add('hidden');
    quizResultsScreen.classList.remove('hidden');
    quizResultsText.innerHTML = `You got ${playerScore}/5!`;
}

/**
 * This function has an event listener on the home button that when clicked
 * will bring the user back to the home screen, set the playerScore back to 0
 * and calls the resetState function
 */
function homeBtn() {
    quizHomeBtn.addEventListener('click', function () {
        quizResultsScreen.classList.add('hidden');
        quizHomeMenu.classList.remove('hidden');
        playerScore = 0;
        resetState();
    })
}

// Easy Questions nested data structure
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

// Medium Questions nested data structure
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

// Hard Questions nested data structure
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

        answer: 'Squidward'
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