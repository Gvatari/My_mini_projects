const login = document.getElementById('login');
const password = document.getElementById('password');

const button = document.querySelector('.form__button');
const form = document.querySelector('.form');

const checkbox = document.getElementById('checkbox');
const checkboxMark = document.querySelector('.form__checkbox-mark');

const loginFieldWrapper = document.getElementById('login-field');
const passwordFieldWrapper = document.getElementById('password-field');
const checkboxFieldWrapper = document.getElementById('checkbox-field');

const emptyTextLogin = document.createElement('span');
const emptyTextPassword = document.createElement('span');
const emptyTextCheckbox = document.createElement('span');

button.addEventListener('click', (e) => {
  e.preventDefault();

  //* Login
  if (validateEmail(login.value)) {

    if (login.classList.contains('invalid')) {
      login.classList.remove('invalid');
    }

    emptyTextLogin.remove();

    login.classList.add('valid');
  } else {
    if (login.classList.contains('valid')) {
      login.classList.remove('valid');
    }

    login.classList.add('invalid');

    if (login.value === '') {
      emptyTextLogin.classList.add('empty-field');
      emptyTextLogin.innerText = 'Поле обязательно для заполнения';
      loginFieldWrapper.appendChild(emptyTextLogin);
    } else {
      emptyTextLogin.classList.add('empty-field');
      emptyTextLogin.innerText = 'Email невалидный';
      loginFieldWrapper.appendChild(emptyTextLogin);
    }
  }

  //* Password
  if (password.value.length >= 8) {

    if (password.classList.contains('invalid')) {
      password.classList.remove('invalid');
    }

    emptyTextPassword.remove();

    password.classList.add('valid');

  } else {

    if (password.classList.contains('valid')) {
      password.classList.remove('valid');
    }

    password.classList.add('invalid');

    if (password.value.length === 0) {
      emptyTextPassword.classList.add('empty-field')
      emptyTextPassword.innerText = 'Поле обязательно для заполнения';
      passwordFieldWrapper.appendChild(emptyTextPassword);
    } else {
      emptyTextPassword.classList.add('empty-field')
      emptyTextPassword.innerText = 'Пароль должен содержать как минимум 8 символов';
      passwordFieldWrapper.appendChild(emptyTextPassword);
    }
  }

  //* Checkbox
  if (checkbox.checked) {

    if (checkboxMark.classList.contains('invalid')) {
      checkboxMark.classList.remove('invalid');
    }

    emptyTextCheckbox.remove();

    checkboxMark.classList.add('valid');
  } else {

    if (checkboxMark.classList.contains('valid')) {
      checkboxMark.classList.remove('valid');
    }

    checkboxMark.classList.add('invalid');

    emptyTextCheckbox.classList.add('no-checked')
    emptyTextCheckbox.innerText = 'Поле обязательно для заполнения';
    checkboxFieldWrapper.appendChild(emptyTextCheckbox);
  }

});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}