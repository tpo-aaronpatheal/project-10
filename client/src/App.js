import React, { useContext } from 'react';
import Context from './context';

import Nav from './components/nav';

function App() {

  const { value } = useContext(Context);


  const getCourses = () => {
     console.log(value.courses)
  }

  return (
    <>
      <Nav />
      <button onClick={getCourses}>click me</button>
    </>
  );
}

export default App;
