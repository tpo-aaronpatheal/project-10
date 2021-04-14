import React, { useContext, useEffect } from 'react'
import Context from '../context'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

// Import API?
// Async/Await to a global error route?
// axios?
// Write in a try block?
// If .status === 400 || 500
// useContext(), [error, setError]??
// {value} = error

const Errorpage = () => {
  const { value } = useContext(Context);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`http://localhost:3000/api/404`,
      );
      value(result.error)
    };

    fetch();
  }, []);

  

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

export default Errorpage;
