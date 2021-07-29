/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './article-list.scss';
import '../article-item';

class ArticleList extends HTMLElement {
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._articles.forEach((article) => {
      const articleItem = document.createElement('article-item');
      articleItem.article = article;
      this.appendChild(articleItem);
    });
  }
}

customElements.define('article-list', ArticleList);
