import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import LogoImg from "../../img/icon_570.png";
import sprite from "../../img/sprite.svg";

import styles from "./SignUp.module.scss";

const InitialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required")
    .min(5, "* Email must be at least 3 characters"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");

  const [showPassword, showSetPassword] = useState(false);
  const [showConfirmPassword, showSetConfirmPassword] = useState(false);

  const toggleShowPassword = () =>
    showSetPassword((prevState) => {
      console.log("toggleShowPassword", prevState);
      return !prevState;
    });

  const toggleConfirmPassword = () =>
    showSetConfirmPassword((prevState) => {
      console.log("toggleConfirmPassword", prevState);
      return !prevState;
    });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Link to="/" alt="signUp" className={styles.logo}>
        <img src={LogoImg} alt="logo" className={styles.logoImg} />
      </Link>
      <h1 className={styles.authTitle}>Sign Up with email</h1>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className="form-group">
            <div className={styles.label}>Gender</div>
          </div>
          <ul className={styles.gender}>
            <li className={styles.genderList}>
              {isPageWideMobile ? (
                <svg width="90" height="80">
                  <use xlinkHref={`${sprite}#icon-male_320`} />
                </svg>
              ) : (
                <svg width="156" height="100">
                  <use xlinkHref={`${sprite}#male`} />
                </svg>
              )}
            </li>
            <li className={styles.genderList}>
              {isPageWideMobile ? (
                <svg width="90" height="80">
                  <use xlinkHref={`${sprite}#icon-fema_320`} />
                </svg>
              ) : (
                <svg width="156" height="100">
                  <use xlinkHref={`${sprite}#fema`} />
                </svg>
              )}
            </li>
            <li className={styles.genderList}>
              {isPageWideMobile ? (
                <svg width="90" height="80">
                  <use xlinkHref={`${sprite}#icon-other_320`} />
                </svg>
              ) : (
                <svg width="156" height="100">
                  <use xlinkHref={`${sprite}#other`} />
                </svg>
              )}
            </li>
          </ul>
        </div>

        <Formik
          initialValues={InitialState}
          validationSchema={validationSchema}
          onSubmit={(fields) => {
            alert("SUCCESS!! 🥳\n\n" + JSON.stringify(fields, null, 4));
          }}
          render={({ errors, status, touched }) => (
            <Form className={styles.form} autoComplete="off">
              <div className="form-group">
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>

                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />

                <button
                  type="button"
                  onClick={toggleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className={styles.eyeIconBtnPassword}
                >
                  {" "}
                  {showPassword ? (
                    <svg className={styles.eyeIcon}>
                      <use href={`${sprite}#icon-eye`}></use>
                    </svg>
                  ) : (
                    <svg className={styles.eyeIcon}>
                      <use href={`${sprite}#icon-eye-hidden`}></use>
                    </svg>
                  )}
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  className={styles.eyeIconBtnConfirm}
                >
                  {" "}
                  {showConfirmPassword ? (
                    <svg className={styles.eyeIcon}>
                      <use href={`${sprite}#icon-eye`}></use>
                    </svg>
                  ) : (
                    <svg className={styles.eyeIcon}>
                      <use href={`${sprite}#icon-eye-hidden`}></use>
                    </svg>
                  )}
                </button>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn ">
                  Sign up
                </button>
              </div>
            </Form>
          )}
        />

        <div className={styles.additionalInfo}>
          <p>Already have an account? </p>
          <Link to="/signIn" className={styles.link}>
            Sign in
          </Link>
        </div>

        <div className={styles.additionalInfo}>
          <p>Review privacy and disclosures </p>
          <a
            href="https://drive.google.com/file/d/1Zcm1VeMVMxpw6HLx0fpRm8k7-wUCO85n/view?usp=sharing"
            className={styles.link}
          >
            here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
