import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

import ToggleFullscreen from '../Common/ToggleFullscreen';
import HeaderRun from './Header.run';

class Header extends Component {
  componentDidMount() {
    HeaderRun();
  }

  toggleSignout = (e) => {
    sessionStorage.removeItem('rjss');
  };

  resize() {
    // all IE friendly dispatchEvent
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
    // modern dispatchEvent way
    // window.dispatchEvent(new Event('resize'));
  }

  render() {
    return (
      <header className='topnavbar-wrapper'>
        {/* START Top Navbar */}
        <nav className='navbar topnavbar'>
          {/* START navbar header */}
          <div className='navbar-header'>
            <a className='navbar-brand' href='#/'>
              <div className='brand-logo'>
                <p style={{ color: 'white' }}>Todo List Web Application</p>
              </div>
              <div className='brand-logo-collapsed'>
                <img className='img-fluid' src='img/logo-single.png' alt='App Logo' />
              </div>
            </a>
          </div>
          {/* END navbar header */}

          {/* START Right Navbar */}
          <ul className='navbar-nav flex-row'>
            {/* Fullscreen (only desktops) */}
            <li className='nav-item d-none d-md-block'>
              <ToggleFullscreen className='nav-link' />
            </li>
            <li className='nav-item'>
              <a href='' className='nav-link' onClick={this.toggleSignout} title='Sign out'>
                <em className='fas fa-sign-out-alt'></em>
              </a>
            </li>
          </ul>
          {/* END Right Navbar */}
        </nav>
        {/* END Top Navbar */}
      </header>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object,
  settings: PropTypes.object,
};

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
