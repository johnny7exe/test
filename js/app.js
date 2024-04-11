

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
  qa1: "Неверно",  // Предполагаем, что правильный ответ на первый вопрос "Неверно"
  qa2: "Дмитрий Ивановский",
  qa3: "РНК-содержащим",
  qa4: "Несколько часов",
  qa5: "Оба утверждения неверны",
  qa6: "Неклеточная форма жизни",
  qa7: "Только в клетке хозяина",
  qa8: "Вирусология",
  qa9: "На рибосомах клетки-хозяина",
  qa10: "Антитела",
  qa11: "СПИД, грипп, герпес",
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

