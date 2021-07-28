/* eslint-disable linebreak-style */

const About = {
  async render() {
    return `
      <h2>About Page</h2>
    `;
  },

  async afterRender() {
    console.log('About Page');
  },
};

export default About;
