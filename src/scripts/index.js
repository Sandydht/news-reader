/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';

const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#navbar');

menuButton.addEventListener('click', (event) => {
  navbar.classList.toggle('open');
  event.stopPropagation();
});

document.body.addEventListener('click', (event) => {
  navbar.classList.remove('open');
  event.stopPropagation();
});
