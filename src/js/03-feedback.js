import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'), //объявляем элемент по классу
  textarea: document.querySelector('.feedback-form textarea'), //объявляем элемент по классу
  emailEl: document.querySelector('.feedback-form input'),
};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit); //подписываемся на событие и вызываем функцию по клику на кнопку
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); //подписываемся на событие и вызываем функцию по клику на кнопку

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.emailEl.value === '' || refs.textarea.value === '') {
    alert('Заполните все поля');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset(); //очищаем форму после отправки

  localStorage.removeItem(STORAGE_KEY); //очищаем хранилище после отправки
}
//Получаем значение поля

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  //const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); //Сохраняем его в хранилеще
}

// обновляем DOM
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); //Получаем значение из хранилища

  if (savedMessage) {
    //проверяем если что-то есть, тогда выполняем код, если нет "if" не выполн.
    refs.emailEl.value = savedMessage.email; //обновляем DOM refs.textarea записываем  value
    refs.textarea.value = savedMessage.message; // обновляем DOM refs.textarea записываем  value
    formData.email = savedMessage.email;
    formData.message = savedMessage.message;
  }
}

