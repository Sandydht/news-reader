/* eslint-disable linebreak-style */

const Contact = {
  async render() {
    return `
      <h2>Contact Page</h2>
    `;
  },

  async afterRender() {
    console.log('Contact Page');
  },
};

export default Contact;
