import React from "react";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";

import styles from "./AppBar.module.scss"

const AppBar = () => {
  return (
    <div className={styles.navContainer}>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;
