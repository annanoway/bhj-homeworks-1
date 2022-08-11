let chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
let chatWidgetMessages = document.getElementById('chat-widget__messages');

let indexOfAnswer = () => Math.round(Math.random() * (robotAnswersMessages.length - 1));
const robotAnswersMessages = ['Добрый день!До свидания',
  'Где ваша совесть?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
  'Вы не купили ни одного товара для того, чтобы с вами так разговаривать',
  'Мы ничего не будем вам продавать!',
  'Кто тут?']

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})
chatWidgetInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim().length > 0) {
    chatWidgetMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
    `;
    chatWidgetInput.value = '';
    chatWidgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">
        ${robotAnswersMessages[indexOfAnswer()]}
      </div>
    </div>
    `
  }
})