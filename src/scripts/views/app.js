/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (e) {
      this._content.innerHTML = '<h2>Page Not Found</h2>';
    }
  }
}

export default App;
