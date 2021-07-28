/* eslint-disable linebreak-style */

const Home = {
  async render() {
    return `
      <h2>Home Page</h2>
    `;
  },

  async afterRender() {
    console.log('Home Page');
  },
};

export default Home;
