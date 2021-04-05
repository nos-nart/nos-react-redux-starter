import React from 'react';
import PropTypes from 'prop-types';
// import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
