import React, { useContext, useEffect } from 'react'
import Context from '../context'
import { NavLink } from 'react-router-dom'

const UnhandledError = () => {
  const { value } = useContext(Context)

  return (
    <div className='wrap'>
      <h2>{value.error}</h2>
      <p>
        Sorry! We just encountered an unexpected error.
      </p>
      <NavLink to='/'>
        <button>
          Return home
        </button>
      </NavLink>
    </div>
  )
}

export default UnhandledError
