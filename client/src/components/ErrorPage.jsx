import React, { useState, useContext } from 'react'
import Context from '../context'
import { NavLink } from 'react-router-dom'
import api from '../utils/api';

const ErrorPage = () => {
  //  const { value, value: { actions: {setError}} } = useContext(Context);

   return (
    <div className='wrap'>
      <h2>It's us, not you!</h2>
      <p>
        Sorry! We just encountered an unexpected error.
      </p>
      <NavLink to='/404'>
        <button>
          Return home
        </button>
      </NavLink>
    </div>
  )
}
export default ErrorPage
