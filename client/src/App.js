import React, { useContext } from 'react';
import Context from './context';

import Nav from './components/Nav';
import AllCourses from './components/AllCourses';

function App() {

  const { value } = useContext(Context);


  const getCourses = () => {
     console.log(value.courses)
  }

  return (
    <>
      <Nav />
      <AllCourses />
      <button onClick={getCourses}>click me</button>
    </>
  );
}

export default App;
