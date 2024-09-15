import { quizData } from './data.js'; // Ensure the path is correct
const questionElement = document.querySelector('.question');
const answerList = document.querySelector('.answer');
const submitButton = document.querySelector('.submit');
const resultElement = document.querySelector('.result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    console.log(quizData)

    questionElement.textContent = currentQuestion.question;
    answerList.innerHTML = '';

    for (const option in currentQuestion) {
        if (option !== 'question' && option !== 'correct') {
            const li = document.createElement('li');
            li.innerHTML = `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${currentQuestion[option]}
                </label>
            `;
            answerList.appendChild(li);
        }
    }
}

function showResult() {
    resultElement.textContent = `You answered ${score} out of ${quizData.length} questions correctly!`;
    resultElement.style.display = 'block';
}

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        // Rotate card effect
        const card = document.querySelector('.quiz-card');
        card.querySelector('.question').innerHTML = ''
        card.querySelectorAll('li').forEach(option => option.innerHTML = '')
        card.style.transform = 'rotateY(180deg)';
        
        setTimeout(() => {
            card.style.transform = 'rotateY(0deg)';
            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResult();
                submitButton.style.display = 'none'; // Hide submit button after quiz
            }
        }, 600); // Match the duration of the CSS transition
    } else {
        alert('Please select an answer!');
    }
});

// Load the first question
loadQuestion();