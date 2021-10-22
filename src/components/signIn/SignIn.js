import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.scss";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [user, setUser] = useState(initialState);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert("Login success ✅");
  };

  return (
    <form className={styles.loginForm} onSubmit={onHandleSubmit}>
      <label htmlFor="email" className={styles.label}>
        Email
        <input
          id="email"
          name="email"
          type="mail"
          className={styles.inputData}
          placeholder="Email*"
          value={user.email}
          onChange={onHandleChange}
          required
        />
      </label>
      <label htmlFor="password" className={styles.label}>
        Password
        <input
          id="password"
          name="password"
          type="password"
          className={styles.inputData}
          placeholder="Password*"
          value={user.password}
          onChange={onHandleChange}
          required
        />
      </label>
      <button type="submit" className={styles.submitBtn}>
        Log in
      </button>

      <div className={styles.additionalInfo}>
        <p>Don't have an account yet? </p>
        <Link to="/signUp" className={styles.link}>
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
