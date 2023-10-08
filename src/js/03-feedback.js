// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');

// function saveToLocalStorage() {
//   const data = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }

// const throttledSaveToLocalStorage = _.throttle(saveToLocalStorage, 500);

// emailInput.addEventListener('input', throttledSaveToLocalStorage);
// messageInput.addEventListener('input', throttledSaveToLocalStorage);

// const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
// if (savedData) {
//   emailInput.value = savedData.email;
//   messageInput.value = savedData.message;
// }

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); 

//   console.log({
//     email: emailInput.value,
//     message: messageInput.value,
//   });

//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = '';
//   messageInput.value = '';
// });

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

let formData = {};

initForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function initForm() {
  let savedData = localStorage.getItem('feedback-form-state');
  
  if (savedData) {
    savedData = JSON.parse(savedData);
    inputEmail.value = savedData.email || '';
    inputMessage.value = savedData.message || '';
    formData = savedData;
  }
}