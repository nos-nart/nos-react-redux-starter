import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function MenuItem({ exact, title, to }) {
  return (
    <NavLink exact={exact} to={to} activeClassName={styles.activeMenuItem}>
      {title}
    </NavLink>
  );
}

MenuItem.propTypes = {
  exact: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const Header = () => {
  return (
    <nav>
      <ul className={styles.headerWrapper}>
        <li>
          <MenuItem exact to="/" title="Home" />
        </li>
        <li>
          <MenuItem exact={false} to="/about" title="About" />
        </li>
        <li>
          <MenuItem exact={false} to="/protected" title="Protected" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
