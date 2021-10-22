import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./AppBar.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navLinks}>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
