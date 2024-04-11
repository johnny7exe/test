let count = 0;
let increaseToTen = setInterval(() => {
    document.getElementById('counter').innerText = count;
    count++;
    if (count > 10) {
        clearInterval(increaseToTen);
        setTimeout(() => {
            let increaseByOne = setInterval(() => {
                document.getElementById('counter').innerText = count;
                count++;
            }, 1000); // Увеличиваем на 1 каждую секунду
        }, 10000); // После 10 увеличиваем каждые 20 секунд
    }
}, 500); // Увеличиваем до 10 каждые полсекунды



const modal = document.getElementById('modal');
const startTestBtn = document.getElementById('startTestBtn');
const closeBtn = document.getElementsByClassName('close')[0];

startTestBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

const correctAnswers = {
    qa1: "Прокариот",  // Предполагаем, что правильный ответ на первый вопрос "Неверно"
    qa2: "Цитоплазматическая мембрана",
    qa3: "Клеточная стенка",
    qa4: "Муреин",
    qa5: "10000",
    qa6: "Мезосомы",
    qa7: "Гранулы включения",
    qa8: "Жгутики и пили",
    qa9: "Да",
    qa10: "Стерилизация",
    qa11: "Редуценты",
};


function submitQuiz() {
    const form = document.getElementById('quizForm');
    const inputs = form.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    inputs.forEach(input => {
        const questionId = input.getAttribute('name');
        const answer = input.value;
        if (correctAnswers[questionId] === answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');

    resultText.textContent = `Вы набрали ${score} из ${Object.keys(correctAnswers).length} правильных ответов.`;
    resultContainer.style.display = 'block';
}

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('resultContainer').style.display = 'none';
}
