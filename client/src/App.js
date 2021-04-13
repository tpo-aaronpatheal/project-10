import './styles/global.css';
import React, { useContext } from 'react';
import Context from './context';


function App() {

  const { value } = useContext(Context);


  const getCourses = () => {
     console.log(value.courses)
  }

  return (
    <>
      <button onClick={getCourses}>click me</button>
    </>
  );
}

export default App;
