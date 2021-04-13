import React, { useContext, useEffect, useHistory, useRef } from 'react';
//import { NavLink } from 'react-router-dom';
import Context from '../context';
import api from '../utils/api.js';


function SignIn() {

    const { value: {actions: {setAuthUser, onChange, setUserEmail}} } = useContext(Context);

    const emailInput = useRef('');
    const passwordInput = useRef('');

    const onSubmit = (e) => {
        e.preventDefault();
        api.getUser('users' ,emailInput.current.value, passwordInput.current.value);
    }

    return (
      <>
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>              
                <form onSubmit={onSubmit}>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" ref={emailInput} /> 
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" ref={passwordInput}/>
                    <button className="button" type="submit">Sign In</button>
                <button className="button button-secondary">Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>               
            </div>
        </main>
      </>
    );
  }
  
  export default SignIn;