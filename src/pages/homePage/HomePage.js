import React from "react";

import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <h1>Welcome to our App</h1>
      <p>Please register or login to use it </p>
    </div>
  );
};

export default HomePage;
