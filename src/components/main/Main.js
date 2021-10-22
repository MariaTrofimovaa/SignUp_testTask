import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "../navigation/AppBar";
import styles from "./Main.module.scss"

const Home = lazy(() => import("../../pages/homePage/HomePage"));
const SignUp = lazy(() => import("../../pages/signUpPage/SignUpPage"));
const SignIn = lazy(() => import("../../pages/signInPage/SignInPage"));

const Main = () => {
  return (
    <div className={styles.main}>
      <AppBar />
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signUp"
            component={SignUp}
            redirectTo="/signIn"
            restricted
          />
          <Route
            path="/signIn"
            component={SignIn}
            redirectTo="/signUp"
            restricted
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
