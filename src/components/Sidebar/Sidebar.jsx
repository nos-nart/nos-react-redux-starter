import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  const { routes } = props;
  return (
    <>
      <div className={styles.sidebarWrapper}>
        <span>BKAV</span>
        <div>
          {routes.map((route) => (
            <NavLink
              exact={route.exact}
              to={route.path}
              activeClassName={styles.activeMenuItem}>
              {route.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default Sidebar;
