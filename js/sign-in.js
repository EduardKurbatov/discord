import { getUserFromDB } from './db.js';
import { validateInput, validate } from './utils.js';
import { modalBuilder } from './modalBuilder.js';

let logBtn = document.getElementById('logbtn'),
  passinput = document.getElementById('passinput'),
  emailinput = document.getElementById('emailinput');

validateSubmit();

validateInput(passinput, 'password', () => {
  validateSubmit();
});

validateInput(emailinput, 'email', () => {
  validateSubmit();
});

function validateSubmit() {
  if (
    validate.email(emailinput.value) &&
    validate.password(passinput.value) &&
    emailinput.value.trim() != '' &&
    passinput.value.trim() != ''
  ) {
    logBtn.disabled = false;
  } else {
    logBtn.disabled = true;
  }
}

logBtn.onclick = function () {
  if (
    getUserFromDB({
      email: emailinput.value,
      password: passinput.value,
    })
  ) {
    window.location.href = './chat.html';
  } else {
    modalBuilder.openModal('errorModal');
  }
};

modalBuilder.create({
  id: 'errorModal',
  controls: [
    {
      label: 'OK',
      action: 'close',
    },
  ],
  content: {
    header: 'Error',
    body: 'User does not exist',
  },
});
