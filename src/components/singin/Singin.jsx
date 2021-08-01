import React from "react";

import styles from "./singin.module.css";
import TextInput from "../microCopmonents/TextInput";
import MainButton from "../microCopmonents/MainButton";

import { NavLink } from "react-router-dom";
import Logo from "../microCopmonents/Logo";

const Singin = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div><Logo /></div>
        <h2>Sign in or create an account</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.textField}>
          <div>
            <h1>Sing in</h1>
            <p>
              New user?<NavLink to="/checkin"> Create an account</NavLink>
            </p>
          </div>

           <form className={styles.formSingin} action="">
            <TextInput label="email address" type="text" />
            <TextInput label="password" type="password" />
            <MainButton label="CONTINUE" />
          </form>
          <div className={styles.smallText}>
            Protected by reCAPTCHA and subject to the Google Privacy Policy and
            Terms of Service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
