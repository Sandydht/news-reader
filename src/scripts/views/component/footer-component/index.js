/* eslint-disable linebreak-style */
import './footer-component.scss';

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>News Reader Copyright</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
