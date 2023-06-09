const enterQuizBtn = document.getElementById('enter-quiz-btn');
const quizHomeMenu = document.getElementById('quiz-home-menu');
const quizRulesBtn = document.getElementById('quiz-rules-btn');
const quizRulesMenu = document.getElementById('quiz-rules-container');
const mainQuizHomeBtn = document.getElementById('main-home-btn');
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
const answerBtnContainer = document.getElementById('answer-btn-container');
const nextQuestionBtn = document.getElementById('next-btn');
const quizResultsScreen = document.getElementById('quiz-results-screen');
const quizResultsText = document.getElementById('quiz-results-text');
const quizHomeBtn = document.getElementById('home-btn');
const quizReplayBtn = document.getElementById('replay-btn');
const quizResultsfeedback = document.getElementById('quiz-results-feedback');

let answerButtons = document.getElementsByClassName('answer-btn'); // HTML Array used to access all answer buttons
let randomQuestions; // Variable set to the array of questions from the difficulty selector function
let indexOfCurrentQuestion; // Variable tracks the index of the current question
let playerScore; // Variable tracks the player score, value set in runQuiz function
let questionCounter; // Variable tracks question the player is on, value set in runQuiz function

/**
 * Event listener added to the quiz button on the quiz home screen
 * that listens for clicks. It will bring the user to the difficulty selection screen 
 */
enterQuizBtn.addEventListener('click', function () {
    quizHomeMenu.classList.add("hidden");
    difficultySelectorMenu.classList.remove("hidden");
});

/**
 * Event listener added to the rules button on the quiz home screen
 * that listens for clicks. It will bring the user to the rules screen 
 */
quizRulesBtn.addEventListener('click', function () {
    quizHomeMenu.classList.add("hidden");
    quizRulesMenu.classList.remove("hidden");
});

// Reloads the window taking the user back to the home screen
mainQuizHomeBtn.onclick = () => {
    window.location.reload();
};

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
 * and displaying the quiz questions. The playerScore variable is initialised to 0 and the 
 * questionCounter variable is initialised to 1.
 * 
 * It sets the index of the of the current question to 0 and runs the displayQuestions function. 
 * When clicking the next question button, the nextQuestion function is run. When clicking the 
 * home button, the HomeBtn function is run. Similarly, when clicking the replay button, the replay 
 * quiz funtion is run.
 */
function runQuiz() {
    quizReadyUpMenu.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    quizQuestionsContainer.classList.remove('hidden');

    playerScore = 0;
    questionCounter = 1;
    indexOfCurrentQuestion = 0;
    displayQuestions(randomQuestions[indexOfCurrentQuestion]);


    nextQuestionBtn.onclick = nextQuestion;
    quizHomeBtn.onclick = homeBtn;
    quizReplayBtn.onclick = replayQuiz;
}

/**
 * This function will set the inner text of the question element to the text of the selected question in the array/object.
 * As well as that, the question number will also be shown infront of the question.
 * It will also set the text of the buttons to the options text in the same selected question array/object.
 * A for of loop is used to set the onclick event attribute to run the checkAnswer function for each button.
 * @param {Current object in the selected question array} question 
 */
function displayQuestions(question) {
    currentQuestion.innerText = questionCounter + '. ' + question.question;
    answerButton1.innerText = question.options[0].text;
    answerButton2.innerText = question.options[1].text;
    answerButton3.innerText = question.options[2].text;
    answerButton4.innerText = question.options[3].text;

    // For loop utilised to randomise the order that each answer button is shown
    for (let i = answerBtnContainer.children.length; i >= 0; i--) {
        answerBtnContainer.appendChild(answerBtnContainer.children[Math.random() * i | 0]);
    }

    for (let i of answerButtons) {
        i.onclick = checkAnswer;
    }
}

// creating the new div tags the correct and incorrect icons
let tickIconTag = '<div class="icon tick"><i class="fa-regular fa-circle-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fa-regular fa-circle-xmark"></i></div>';

/**
 * This function assigns the user selected answer and the correct answer to variables.
 * 
 * If the user's selected answer is equal to the correct answer - the selected button will have the
 * correct style applied and the playerScore/indexOfCurrentQuestion variables will be incremented.
 * A tick icon will also be displayed.
 * 
 * If the answers do not match - the selected button will have the incorrect style applied and a for
 * of loop runs checking the innerText of the other answerButtons. When the loops finds a match with 
 * the correct answer, the correct style will be applied. The question index is then incremented and
 * both tick and cross icons will display on each relative button.
 * 
 * Once the user selects an answer, all buttons attributes are set to disabled, the button hover 
 * effect is removed and the cursor property is set to auto. The question counter is also incremented.
 * @param {Button clicked by the user} event 
 */
function checkAnswer(event) {
    let selectedBtn = event.target;
    let selectedAnswer = selectedBtn.innerText;
    let correctAnswer = randomQuestions[indexOfCurrentQuestion].answer;
    nextQuestionBtn.classList.remove('hidden');

    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        selectedBtn.insertAdjacentHTML("beforeend", tickIconTag);
        indexOfCurrentQuestion++;
        playerScore++;
    } else {
        selectedBtn.classList.add('incorrect');
        for (let i of answerButtons) {
            if (i.innerText === correctAnswer) {
                i.classList.add('correct');
                i.insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
        selectedBtn.insertAdjacentHTML("beforeend", crossIconTag);
        indexOfCurrentQuestion++;
    }

    for (let i of answerButtons) {
        i.setAttribute("disabled", "disabled");
        i.classList.remove('answer-btn-hover');
        i.style.cursor = 'auto';
    }

    questionCounter++;
}


/**
 * This funtion sets the quiz length to 4. If the index of the current question is greater
 * than the quizLength variable, the displayResults function is called. Otherwise,
 * the displayQuestions & resetState functions are called
 */
function nextQuestion() {
    let quizLength = 4;
    nextQuestionBtn.addEventListener('click', function () {
        if (indexOfCurrentQuestion > quizLength) {
            displayResults();
        } else {
            nextQuestionBtn.classList.add('hidden');
            displayQuestions(randomQuestions[indexOfCurrentQuestion]);
            resetState();
        }
    });
}

/**
 * This function utilises a for loop that removes correct/incorrect styles from the answer buttons
 * and removes the disabled attribute from the buttons allowing the user to select a new answer.
 * The function will re-enable the button hover effects and return the cursor property to pointer.
 */
function resetState() {

    for (let i of answerButtons) {
        i.classList.remove('correct');
        i.classList.remove('incorrect');
        i.classList.add('answer-btn-hover');
        i.removeAttribute("disabled", "disabled");
        i.style.cursor = 'pointer';
    }
}

/**
 * This function will hide the quiz questions and display the quiz results screen.
 * It tracks the player score and displays it to the user.
 * 
 * It will also utilises a switch case statement to display personalised messages 
 * depending on the userScore value set by the player of the quiz.
 */
function displayResults() {
    quizQuestionsContainer.classList.add('hidden');
    quizResultsScreen.classList.remove('hidden');
    quizResultsText.innerHTML = `You got ${playerScore}/5 Questions Correct!`;

    switch (playerScore) {
        case 0:
            quizResultsfeedback.innerHTML = 'You need to go back to Boot Camp!';
            break;
        case 1:
            quizResultsfeedback.innerHTML = 'You should watch some more movies!';
            break;
        case 2:
            quizResultsfeedback.innerHTML = 'I know you can do better!';
            break;
        case 3:
            quizResultsfeedback.innerHTML = 'Even Drax can get that much!';
            break;
        case 4:
            quizResultsfeedback.innerHTML = 'Very impressive, Tony would be proud!';
            break;
        case 5:
            quizResultsfeedback.innerHTML = "WOW! You're a True Marvel Nut!";
            break;
    }
}

/**
 * When called, this function will bring the user back to the home screen, 
 * and calls the resetState function.
 */
function homeBtn() {
    quizResultsScreen.classList.add('hidden');
    quizHomeMenu.classList.remove('hidden');
    resetState();
}

/**
 * When called, this function will hide the results screen, resets
 * the quiz state and runs the runQuiz function, allowing the player to
 * re-take the same quiz again without returning to the main menu.
 */
function replayQuiz() {
    quizResultsScreen.classList.add('hidden');
    resetState();
    runQuiz();
}