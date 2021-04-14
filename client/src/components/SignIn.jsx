import React, { useContext, useRef } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

import Context from '../context';
import api from '../utils/api.js';


function SignIn() {

    const { value, value: {actions: {setAuthUser, setUserEmail, setUserName, setError}} } = useContext(Context);

    const emailInput = useRef('');
    const passwordInput = useRef('');
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await api.getUser('users' ,emailInput.current.value, passwordInput.current.value);
          if (response.status === 200) {
              setAuthUser(true);
              setUserEmail(response.data.email);
              setUserName(response.data.name);
              setError(null);
              Cookies.set('loggedIn', true, {expires: 1})
              Cookies.set('username', response.data.name, {expires: 1})
              history.goBack();
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
                    <NavLink to="/"><button className="button button-secondary">Cancel</button></NavLink>
                </form>
                <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>               
            </div>
        </main>
      </>
    );
  }
  
  export default SignIn;