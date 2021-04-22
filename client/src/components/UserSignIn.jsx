import React, { useContext, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Context from '../context';
import api from '../utils/api.js';


function UserSignIn() {

  const { value, value: { actions: { asyncHandler, setUser } } } = useContext(Context);

  const emailInput = useRef('');
  const passwordInput = useRef('');
  const history = useHistory();

  const setCookies = async () => {
    const encodedPassword = btoa(passwordInput.current.value)
    const response = await api.getUser('users', emailInput.current.value, encodedPassword);
    const { data: { id, name, email } } = response;
    
    setUser({
      authenticated: true,
      id,
      email,
      userName: name,
      password: encodedPassword,
    });
    
    if(value.redirect === true){
      history.push('/');
    } else{
      history.goBack();
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    asyncHandler(setCookies);
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
            <input id="password" name="password" type="password" ref={passwordInput} />
            <button className="button" type="submit">Sign In</button>
            <NavLink to="/"><button className="button button-secondary">Cancel</button></NavLink>
          </form>
          <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
        </div>
      </main>
    </>
  );
}

export default UserSignIn;