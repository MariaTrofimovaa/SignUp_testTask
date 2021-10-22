import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.scss";


const AuthNav = () => {
  return (
    <nav className={styles.navLinks}>
      <NavLink
        to="/signUp"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/signIn"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Sign in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
