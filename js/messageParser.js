const msgNum = 100;

window.onload = () => {
  const chat = document.getElementById('chat');
  if (chat) {
    for (let i = 0; i < msgNum; i++) {
      generateMessageTemplate(chat);
    }
  }
};

function generateMessageTemplate(parentEl) {
  let container, username, message, avatar, textContainer;

  container = createElement('div', {
    className: 'messages-container',
  });

  username = createElement('span', {
    className: 'username',
    innerHTML: faker.name.findName(),
  });

  message = createElement('span', {
    className: 'message',
    innerHTML: faker.lorem.sentences(),
  });

  avatar = createElement('img', {
    className: 'avatar',
    src: faker.image.avatar(),
  });

  textContainer = createElement('div', {
    className: 'text-col',
  });

  textContainer.appendChild(username);
  textContainer.appendChild(message);

  container.appendChild(avatar);
  container.appendChild(textContainer);

  parentEl.appendChild(container);
}

function createElement(tag = 'div', attr) {
  const el = document.createElement(tag);
  if (attr) {
    Object.keys(attr).forEach((key) => {
      el[key] = attr[key];
    });
  }
  return el;
}
