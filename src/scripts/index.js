/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';

const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#navbar');
const mainContent = document.querySelector('#mainContent');

const app = new App({
  content: mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

menuButton.addEventListener('click', (event) => {
  navbar.classList.toggle('open');
  event.stopPropagation();
});

document.body.addEventListener('click', (event) => {
  navbar.classList.remove('open');
  event.stopPropagation();
});
