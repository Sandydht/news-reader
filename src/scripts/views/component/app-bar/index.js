/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import './app-bar.scss';

class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  openDrawer() {
    this.querySelector('#menuButton').addEventListener('click', (event) => {
      this.querySelector('#navbar').classList.toggle('open');
      event.stopPropagation();
    });
  }

  closeDrawer() {
    document.body.addEventListener('click', (event) => {
      this.querySelector('#navbar').classList.remove('open');
      event.stopPropagation();
    });
  }

  render() {
    this.innerHTML = `
      <header class="app__bar">
        <div class="app-bar__menu">
          <button id="menuButton">&#9776;</button>
        </div>

        <div class="app-bar__logo">
          <h1>News Reader</h1>
        </div>

        <nav id="navbar" class="app-bar__nav">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;

    this.openDrawer();
    this.closeDrawer();
  }
}

customElements.define('app-bar', Appbar);
