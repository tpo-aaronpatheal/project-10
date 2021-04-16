import React, { useContext } from 'react'
import Context from '../context'

const Forbidden = () => {
  const { value } = useContext(Context)

  

  return (
    <div className='wrap'>
      <h2>FORBIDDEN</h2>
      <p>
        Access to this page is Forbidden
      </p>
      <NavLink to='/'>
        <button>
          Return home
        </button>
      </NavLink>
    </div>

  )
}

export default Forbidden
