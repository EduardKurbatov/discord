import { USERS } from './db.js';

const userContainer = document.getElementById('user-container');

for (const user of USERS) {
  let newUser = document.createElement('div'),
    userName = document.createElement('span'),
    avatar = document.createElement('img');
  newUser.className = 'user';
  avatar.className = 'img';
  userContainer.appendChild(newUser);
  newUser.appendChild(avatar);
  newUser.appendChild(userName);
  userName.textContent = user.name;
  avatar.src = user.avatar || '';
}
