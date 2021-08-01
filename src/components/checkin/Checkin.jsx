import React from "react";
import checkin from "./checkin.module.css";

import { NavLink } from "react-router-dom";

import TextInput from '../microCopmonents/TextInput'
import MainButton from '../microCopmonents/MainButton'

import Logo from '../microCopmonents/Logo'

const Checkin = (props) => {
  return (
    <div className={checkin.container}>
      <div className={checkin.content}>
        <div className={checkin.textField}>
          <div>
            <h1>Create an account</h1>
            <p>
              Already have an account?
              <NavLink to="/singin"> Sign in</NavLink>
            </p>
          </div>
          <form className={checkin.formSingin} action="">
            <TextInput label="email address" type="text"/>
            <div style={{display :'flex'}}>
            <TextInput label="first name" type="text"/>
            <TextInput label="last name" type="text"/>
            </div>
            <TextInput label="password" type="password" />
            <div className={checkin.smallText}>
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </div>
            <MainButton label='CREATE ACCOUNT'/>
          </form>
          <div className={checkin.smallText}>
            Protected by reCAPTCHA and subject to the Google Privacy Policy and
            Terms of Service.
          </div>
          
        </div>
      </div>
        
      <div className={checkin.title}>
        <div><Logo /></div>
        <h2>Sign in or create an account</h2>
      </div>
    </div>
  );
};

export default Checkin;
