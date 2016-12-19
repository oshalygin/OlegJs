import React from 'react';
import jQuery from 'jquery';

import HomeNavigationBar from './HomeNavigationBar.jsx';
import PreLoader from '../common/PreLoader.jsx';
import Intro from './Intro.jsx';
import SourceProfile from './SourceProfile.jsx';
import Technology from './Technology.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import '../../styles/homePageTheme.js';

class HomePage extends React.Component {
  componentDidMount() {
    jQuery('body').scrollspy({
      target: '.navbar-custom',
      offset: 50
    });
    jQuery('#intro').backstretch('./client/images/main-code.jpg');

    const navbar = jQuery('.navbar');
    const navHeight = navbar.height();

    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() >= navHeight) {
        navbar.addClass('navbar-color');
      } else {
        navbar.removeClass('navbar-color');
      }
    });
  }

  render() {
    return (
      <div>
        <PreLoader />
        <HomeNavigationBar />
        <Intro />
        <SourceProfile />
        <Technology />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
