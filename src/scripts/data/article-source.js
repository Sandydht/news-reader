/* eslint-disable linebreak-style */

import APIENDPOINT from '../globals/api-endpoint';

class ArticleSource {
  static async articleList() {
    const response = await fetch(APIENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.result;
  }
}

export default ArticleSource;
