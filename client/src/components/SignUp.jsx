import React, { useContext, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Context from '../context';
import api from '../utils/api.js';
import Cookies from 'js-cookie';

function SignUp() {

    const { value } = useContext(Context);
    const history = useHistory();

    const firstNameInput = useRef('');
    const lastNameInput = useRef('');
    const emailInput = useRef('');
    const passwordInput = useRef('');
    const confirmPasswordInput = useRef('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const encodedPassword = btoa(passwordInput.current.value);
          if(passwordInput.current.value === confirmPasswordInput.current.value){
            await api.postCreateUser('users', firstNameInput.current.value, lastNameInput.current.value, emailInput.current.value, passwordInput.current.value);
            value.actions.setAuthUser(true);
            value.actions.setUserEmail(emailInput.current.value);
            value.actions.setPassword(encodedPassword);
            value.actions.setUserName(`${firstNameInput.current.value} ${lastNameInput.current.value}`);
           // setError(null);
            Cookies.set('loggedIn', true, {expires: 1})
            Cookies.set('username', `${firstNameInput.current.value} ${lastNameInput.current.value}`, {expires: 1})
            Cookies.set('email', emailInput.current.value, {expires: 1});
            Cookies.set('pass', encodedPassword, {expires: 1});
            history.goBack();
          } else {
            console.log('passwords do not match')
          }
     }
    
    return (
        <>
            <div className="form--centered">
                <h2>Sign Up</h2>
                
                <form onSubmit={onSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" ref={firstNameInput}/>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" ref={lastNameInput}/>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" ref={emailInput}/>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" ref={passwordInput}/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" ref={confirmPasswordInput}/>
                    <button className="button" type="submit">Sign Up</button>
                    <NavLink to="/"><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></NavLink>
                </form>
                <p>Already have a user account? Click here to <NavLink to='/signin'>sign in!</NavLink></p>
            </div>
        </>    
    );
}


export default SignUp;