/* eslint-disable linebreak-style */

import ArticleSource from '../../data/article-source';
import '../component/article-list';

const Home = {
  async render() {
    return `
      <h2>Home Page</h2>
    `;
  },

  async afterRender() {
    const mainContent = document.querySelector('#mainContent');

    try {
      const articles = await ArticleSource.articleList();
      mainContent.innerHTML = '<article-list></article-list>';
      document.querySelector('article-list').articles = articles;
    } catch (e) {
      console.log(e);
    }
  },
};

export default Home;
