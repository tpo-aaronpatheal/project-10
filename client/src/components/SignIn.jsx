import React, { useContext, useEffect, useHistory, useRef } from 'react';
//import { NavLink } from 'react-router-dom';
import Context from '../context';
import api from '../utils/api.js';


function SignIn() {

    const { value, value: {actions: {setAuthUser, setUserEmail, setError}} } = useContext(Context);

    const emailInput = useRef('');
    const passwordInput = useRef('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await api.getUser('users' ,emailInput.current.value, passwordInput.current.value);
          console.log(response.message);
          if (response.status === 200) {
              setAuthUser(true);
              setUserEmail(response.data.email);
            }
        } catch (error) {
          console.log(error.response.data);
          setError(error.response.data);
        }

      }
      

    return (
      <>
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>      
                {value.error ? <h3 id="error">{value.error}</h3> : null}        
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