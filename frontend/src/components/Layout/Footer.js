import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className='footer-container'>
        <span>
          &copy; {year} - Simon Siah. <span> Source at </span>
          <a href='https://github.com/htsiah/todo-list' target='_blank'>
            https://github.com/htsiah/todo-list
          </a>{' '}
        </span>
      </footer>
    );
  }
}

export default Footer;
