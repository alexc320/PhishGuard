document.addEventListener('DOMContentLoaded', () => {
// Обработчик для кнопок на странице обучения
const phishingButton = document.querySelector('.phishing-button');
const safeButton = document.querySelector('.safe-button');

if (phishingButton) {
phishingButton.addEventListener('click', () => {
alert('Вы выбрали фишинговое письмо! Будьте осторожны!');
});
}

if (safeButton) {
safeButton.addEventListener('click', () => {
alert('Вы выбрали безопасное письмо! Отличная работа!');
});
}

// Обработчик для кнопки симуляции фишинга
const phishingSimulationButton = document.querySelector('.phishing-simulation');
const simulationFeedback = document.getElementById('simulation-feedback');

if (phishingSimulationButton) {
phishingSimulationButton.addEventListener('click', () => {
simulationFeedback.textContent = 'Вы нажали на фишинговую ссылку! Внимание: не переходите по подозрительным ссылкам.';
simulationFeedback.style.color = 'red';
});
}

// Обработчик для AI помощника
const aiHelperButton = document.querySelector('.ai-helper-button');
const aiFeedback = document.getElementById('ai-feedback');

if (aiHelperButton) {
aiHelperButton.addEventListener('click', () => {
aiFeedback.textContent = 'AI помощник: Помните, всегда проверяйте адрес отправителя и ссылки в письмах!';
aiFeedback.style.color = 'green';
});
}
});