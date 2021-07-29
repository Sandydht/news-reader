/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import './views/component/app-bar';
import './views/component/footer-component';

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
