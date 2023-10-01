const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "B"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "B"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "C"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "B"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questionData.question}`;
    optionsElement.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + index)}">${String.fromCharCode(65 + index)}. ${option}`;
        optionsElement.appendChild(li);
    });
}

loadQuestion();

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        feedbackElement.textContent = 'Please select an answer.';
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = '';
        optionsElement.textContent = '';
        submitButton.style.display = 'none';
        feedbackElement.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}`;
    }
});
