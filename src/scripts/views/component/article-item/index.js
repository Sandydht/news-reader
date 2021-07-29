/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './article-item.scss';

class ArticleItem extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    console.log('data: ', this._article);

    this.innerHTML = `
      <div>

      </div>
    `;
  }
}

customElements.define('article-item', ArticleItem);
