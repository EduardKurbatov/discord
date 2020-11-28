const validate = {
  email: (value) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  },
  password: (value) => {
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?!.*[&%$]).{8,}$/;
    return re.test(value);
  },
};

function validateInput(input, type, callback) {
  const errMsg = `wrong ${type}`,
    errorElem = input.nextSibling.nextSibling;
  input.onkeyup = () => {
    if (validate[type](input.value)) {
      errorElem.textContent = '';
    } else {
      errorElem.textContent = errMsg;
    }
    callback();
  };
}

export { validateInput, validate };
