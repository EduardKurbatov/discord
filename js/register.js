import { validateInput, validate } from './utils.js';
import { createUser } from './db.js';

const confirmedPass = document.getElementById('confirmed'),
  passinput = document.getElementById('passinput'),
  emailinput = document.getElementById('emailinput'),
  user = document.getElementById('user'),
  inpFile = document.getElementById('inpFile'),
  prewImg = document.getElementById('img'),
  conteinerText = document.getElementById('containerText'),
  continueBtn = document.getElementById('continue');

let avatar;

validateSubmit();

validateInput(passinput, 'password', () => {
  validateSubmit();
});

validateInput(confirmedPass, 'password', () => {
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
    passinput.value.trim() != '' &&
    user.value.trim() != '' &&
    confirmedPass.value.trim() != '' &&
    passinput.value === confirmedPass.value
  ) {
    continueBtn.disabled = false;
  } else {
    continueBtn.disabled = true;
  }
}

continueBtn.onclick = function () {
  validateSubmit();
};

continueBtn.onclick = () => {
  const userData = {
    name: user.value,
    email: emailinput.value,
    password: passinput.value,
    avatar,
  };
  createUser(userData, ({ success, message }) => {
    console.log(`DB: ${message}`);
    if (success) {
      console.log('operation successful');
      window.location.href = './reg_success.html';
    } else {
      console.log('operation failed');
    }
  });
};

inpFile.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    conteinerText.style.display = 'none';
    prewImg.style.display = 'block';

    reader.addEventListener('load', function () {
      prewImg.setAttribute('src', this.result);
      avatar = this.result;
    });

    reader.readAsDataURL(file);
  } else {
    conteinerText.style.display = null;
    prewImg.style.display = null;
    prewImg.setAttribute('src', '');
  }
});
