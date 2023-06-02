# Marvel Quiz
Marvel Quiz is a fun interactive trivia quiz that tests the players knowledge about all things marvel. The quiz consists of 3 difficulties with different questions. I recommend starting with the easy questions and working your way up from there. These quiz questions are based off the MCU (Marvel Cinematic Universe) and some of them might stump even the most devoted marvel fans!

Think you know everything there is to know about the MCU? Let's see how close you were really paying attention to the 32 (and counting) movies that have been released so far! Have a go at the quiz and lets see how you do!

The live project can be accessed [here](https://markd117.github.io/marvel-quiz/)

![Screenshot](documentation/responsive-image.png)

## UI/UX

### Design Overview
For the design of the quiz, I wanted something that was interesting and fun to look at whilst also retaining a common theme. The site has a main background image consisting of well-known Marvel characters in front of a stylistic blue background. This image frames the main content well, and I find, is interesting for the player to look at. The secondary background is for the quiz content. This background consists of a patterned red image that contrasts well with the blue of the main background.

the same red background is used for all quiz content, staying with the same theme throughout. All of the Main text content uses a font called 'Poppins', which is pleasant to look at, easy to read and is relatively close to the font used in the official Marvel Logo. All of the buttons for the quiz are an off-white colour with black text. This allows the buttons to be easily distinguished from the backgroud as well as easily read by the player.

Again, this button style theme is kept consistant throughout the quiz with small variations in size. Outside of the quiz content is the main quiz heading and the main quiz home button. The heading is centered in the viewport and styled to look similar to the Marvel logo. The home button is a home icon that is in the same red and white stye as the rest of the quiz elements. Both of these elements will always be shown and can be accessed as they are fixed and will not change when navigating the quiz.

### Colour Scheme
Marvel traditionally tend to use very bright and bold colours. As the background is already very vibrant, colourful and active, the quiz uses quite a simple colour palette as not too over-stimulate the player with a plethora of different colours. A deep red and off white colours were used interchangeably for backgrounds and outlines. If text is on a red background, it is set to off-white. If text is on a white background, it is set to black. 

Generally, white text is for headings and black text is for buttons. This increases the readability for the user. The deep red colour is applied to main button text using hover effects. This black, red and white colour Scheme is used throughout the quiz and contrasts well with the blue of the main quiz background. There are two separate colour schemes used for the correct and incorrect styles set for the answer buttons after the user selects and option. The HEX codes and colour palettes can be seen below!

#### Main Colour Palette

- `#000000` used for button text.
- `#FAFAFA` used for heading text, borders & backgrounds.
- `#FF0013` used for borders & backgrounds.

![Screenshot](documentation/main-color-palette.png)

#### Correct Colour Palette

- `#155724` used for button text.
- `#D4EDDA` used for button background.
- `#C3E6CB` used for button border.

![Screenshot](documentation/correct-color-palette.png)

#### Incorrect Colour Palette

- `#721C24` used for button text.
- `#F8D7DA` used for button background.
- `#F5C6CB` used for button border.

![Screenshot](documentation/incorrect-color-palette.png)

### Fonts & Icons
- The 'Poppins' font was used for all text in the quiz. 

This font was sourced from [google fonts](https://fonts.google.com/).

- The home icon used on the main page
- Tick icon used for answer buttons
- Cross icon used for answer buttons

Icons sourced from [Font Awesome](https://fontawesome.com/).

## User Stories

- As a new site user, I'd like to understand the site's goal so that I can determine whether I would like to use it or not.
- As a new site user, I'd like to understand how to play the game.
- As a new site user, I'd like the navigation to be simple and easy to understand.
- As a new site user, I'd like the site to be interesting to look at and fun to play.
- Ad a new site user, I'd like the game to test my knowledge and give me feedback on my progress.


## Wirefames

During the planning stages, I  created wireframes for all pages of the site. [Balsamiq](https://balsamiq.com/wireframes) to design the digital wireframes. All wireframes can be seen below.

### Quiz Home Page Wireframes

<details>
<summary>Click to see the Quiz Home Page Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/quiz-home-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/quiz-home-mobile.png) |

</details>

### Quiz Rules Menu Wireframes

<details>
<summary>Click to see the Quiz Rules Menu Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/quiz-rules-menu-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/quiz-rules-menu-mobile.png) |

</details>

### Difficulty Selection Menu Wireframes

<details>
<summary>Click to see Difficulty Selection Menu Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/difficulty-selection-menu-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/difficulty-selection-menu-mobile.png) |

</details>

### Quiz Ready Up Menu Wireframes

<details>
<summary>Click to see the Quiz Ready Up Menu Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/quiz-ready-up-menu-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/quiz-ready-up-menu-mobile.png) |

</details>

### Quiz Questions Page Wireframes

<details>
<summary>Click to see the Quiz Questions Page Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/questions-page-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/questions-page-mobile.png) |

</details>

### Quiz Results Menu Wireframes

<details>
<summary>Click to see the Quiz Results Menu Wireframes</summary>

| Type | Image |
| --- | --- |
| Desktop | ![screenshot](documentation/wireframes/quiz-results-menu-desktop.png) |
| Mobile | ![screenshot](documentation/wireframes/quiz-ready-up-menu-mobile.png) |

</details>

## Features

### Quiz Home Page

- The quiz home page consists of two main buttons. These are the Quiz button and the Rules button. Upon clicking the Quiz button, the quiz home menu will disappear and the select difficulty menu will be shown to the player. Similarly, when the Rules button is clicked, the home menu will disappear, and the quiz rules will be shown to the player.

    ![Screenshot](documentation/quiz-home-menu.png)

### Quiz Rules menu

- The quiz rules menu explains to the user how to play the game and how the quiz functions.

    ![Screenshot](documentation/quiz-rules-menu.png)

### Main Quiz Home Button

- The main quiz home button is displayed to the player at all times. It can be seen under the quiz content denoted by a 'Home' icon. This button has a hover effect that reverses the colours and will turn the cursor to a pointer if it is placed over it. Hover effect can be seen below.

- The main funtion of this home button is to refresh the page and return the user to the home page when clicked by the player.

    ![Screenshot](documentation/main-quiz-home-button.png)  ![Screenshot](documentation/main-quiz-home-button-hover.png)

### Quiz Difficulty Selection

- This menu is used to set the specific question pool depending on the users selected difficulty. The user is presented with three buttons of varying difficulty. When a button is clicked, a function is run that will set the questions shown to an predetermined array of easy, medium or hard questions.

- The player can replay the quiz and choose a new difficulty each time which will provide them with different questions for all three options.

    ![Screenshot](documentation/quiz-difficulty-selection.png)

### Quiz Ready Up menu

- After selecting a difficulty, the player will be presented with a ready up menu before starting the quiz. This allows the player to gather their thoughts and essentially, get ready before starting the quiz.

- On the menu there is a Start Quiz button. When clicked, the quiz starts and the user can begin to play the game.

    ![Screenshot](documentation/quiz-ready-up-menu.png)

### Quiz Questions Page

- Upon starting the quiz, the ready up menu will disappear and Quiz Questions Page will be shown. the player will be presented with a question at the top of top of the main quiz container. Underneath the question are four selectable buttons.

    ![Screenshot](documentation/quiz-question-menu.png)

#### Quiz Questions & Answer Buttons

- The question displayed is randomly selected from an array based on the difficulty chosen by the player. The buttons are also randomly organised from top to bottom which provides the player with a highly replayable experience. Each time the user replays the quiz, the questions and buttons will be in a different order.

#### Selecting an Answer

- When the player selects an answer, a function will run that checks if the selected answer is correct. If the answer the player selected is correct, the button will turn a green colour and the next question button will appear. 

- If the answer the player selects is found to be incorrect, the selected button will turn red and the correct answer will be highlighted green.

- Depending on whether the answer button is correct or incorrect, a tick or cross icon will appear under the text of the button.

- After the player has selected an answer, all buttons become disabled and can no longer be clicked. The `cursor: pointer;` property is also removed further showing the user that the buttons are not clickable. 

- Any buttons that are not highlighted as correct/incorrect will be greyed out further distinguishing the other relevant answers.

- The next button is hidden until the player selects an answer. Clicking the button will display the next question and reset the state of the answer buttons allowing the player to select another answer.

- Below we can see what the quiz questions page looks like after the player selects an incorrect answer.

    ![Screenshot](documentation/answered-question.png)

#### Quiz Question Number

- In front of the question is the question number. This allows the player to keep track of what question they are on and how many they have left to answer. The question counter is a separate entity to the questions as the questions appear in a random order.

- Each time a new question is displayed, the question counter is increased by 1. If the quiz is replayed or a new difficulty is selected. The counter is reset to its default value of 1.

- Below you can see that the number of the question has increased as we have moved on to the next question in the set.

    ![Screenshot](documentation/question-counter.png)

### Quiz Results Menu

- After completing the quiz, the quiz questions screen will disappear and the Quiz Results Menu will be shown to the user. There is a few interesting features in this menu. First of which, is a score tracker. When the user selects a correct answer, their score will be increased by 1. After they have answered the final question, they will be presented with their score value, depending on how many questions they answered correctly.

- As well as tracking the player score, personalised messages will be displayed, depending on how many questions the player answered correctly. Below we can see the message displayed after answering all five questions correctly.

- There are two buttons on the results menu. These are the Replay Quiz and Main Menu buttons. If the player clicks the replay quiz button, it will allow them to re-take the same difficulty quiz again without having to return to the main home menu. If you don't get a perfect score the first time, this button will let you take the quiz again.

- Clicking the main menu button will reset the quiz, hide the results screen and bring the user back to the main home menu.

    ![Screenshot](documentation/quiz-results-5-correct.png)

## Future Features

### Storing The User Score

- A future feature I would be keen to add is a way for the player to store their score for each individual quiz. I would like to have a feature where they can enter their name and save their score to another menu accessed on the main home page. This could possibly be done through the use of session cookies.

### Timer Based Questions

- Another feature that I would like to add in the future is to have a timer displayed on the quiz questions area. The timer will count down from a set time which will be different for each difficulty. If the timer reaches 0 before the player selects an answer, the question will auto-complete and the correct answer will be highlighted; however, the players score will not increase as they have not answered the question.

### Impossible Difficulty

- An interesting feature I would like to add is another difficulty level called 'Impossible'. This difficulty would contain questions that would puzzle even the most die-hard Marvel fans. Combined with a short timer, this quiz difficulty would truly be a challenge!

### Increase Quiz Questions

- In future, I also want to increase the number of questions shown to the player. Increasing the number of questions would allow the user to have a more detailed experience when playing the quiz.

## Technologies Used

- HTML used to create main site content.
- CSS used designing and styling the layout of the site.
- JavaScript used to implement features and functionality to the game.
- Chrome DevTools - Used to debug and test responsiveness of the site
- Git used for version control
- GitHub used to store game source code.
- GitHub Pages used to deploy the main game
- Gitpod used as a cloud-based IDE for developing the game.

## Testing

### Code Validation

[HTML W3C Validator](https://validator.w3.org) was used to validate the html code. No errors were found.

- index.html Validation
   
    ![index.html-validation screenshot](documentation/html-validation.png)


[CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) was used to validate CSS files. No errors were found.

- style.css Validation
    
    ![style.css-validation screenshot](documentation/css-validation.png)


[JSHint](https://jshint.com/) was used to validate JavaScript files. No significant errors were found; however, there are some warnings that are addressed in further detail in the [Known Bugs](##known-bugs) section.

- script.js Validation

    ![script.js-validation screenshot](documentation/jshint-script.js-img1.png)

    ![script.js-validation screenshot](documentation/jshint-script.js-img2.png)

    ![script.js-validation screenshot](documentation/jshint-script.js-img3.png)

- questions.js Validation

    ![questions.js-validation screenshot](documentation/jshint-questions.js-img.png)

### Lighthouse Testing

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to test the site performance, accessibility, best practices and SEO (Search Engine Optimisation).

The site scored an almost perfect score with only the performance section getting a score of 90/100.

![lighthouse screenshot](documentation/lighthouse-testing.png)

### Colour Accessibility

[A11Y](https://color.a11y.com/Contrast/) was used to test the accessibility of background/text colour contrasts. As we can see in the image below, there are no contrast issues present.

![A11Y screenshot](documentation/a11y-contrast-accessibility-validator.png)


[Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) was also used to test the initial color contrasts. As we can see below, the off-white text fails the contrast ratio on smaller text. That said, there is no text that size in the Marvel Quiz project.

![Adobe Color screenshot](documentation/adobe-color-contrast-check-img1.png)

![Adobe Color screenshot](documentation/adobe-color-contrast-check-img2.png)

### Browser Compatibility

The site has been tested on the following browsers:

- Google Chrome
- Mozilla FireFox
- Microsoft Edge
- iOS (Mobile)
- Android

### Testing and Results

#### **Quiz Home Page**

| Item | Test | Expected Outcome | Result | 
|--|--|--|--|
| Site Elements | Page Load | All elements and styles load and are shown | pass
| Quiz Button | Click button | Hides home menu and shows difficulty selector | pass
| Rules Button | Click button | Hides home menu and shows quiz rules | pass
| Main Home Button | Click home button | Refreshes page and brings user back to main home page | pass
| Main Home Button | Hover on button | Shows button hover effect | pass
| Main Home Button | Hover on button | Cursor changes to pointer | pass
| Quiz Home Page Buttons | Hover on button | Shows button hover effect | pass
| Quiz Home Page Buttons | Hover on button | Cursor changes to pointer | pass

#### **Quiz Rules Menu**

| Item | Test | Expected Outcome | Result | 
|--|--|--|--|
| Rules | Click rules button | All rules are displayed and can be seen clearly | pass
| Rules | Click rules button | Rules container size changes for mobile | pass

#### **Quiz Difficulty Selection**

| Item | Test | Expected Outcome | Result | 
|--|--|--|--|
| Difficulty Buttons | Hover on button | Button hover styles are shown | pass
| Difficulty Buttons | Hover on button | Cursor changes to pointer | pass
| Difficulty Buttons | Click button | Sets the question pool to the chosen difficulty | pass
| Difficulty Buttons | Click button | Hides the difficulty selection menu and shows the ready up menu | pass
