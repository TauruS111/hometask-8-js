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
  if (!formData.email || !formData.message) {
    alert("Усі поля мають бути заповнені!");
    return;
  }
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