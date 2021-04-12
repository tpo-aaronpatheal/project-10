import './styles/global.css';
import React, { useContext } from 'react';
import Context from './context';


function App() {

  const { api } = useContext(Context);

  const getCourses = () => {
    api.getAllCourses('courses').then(res => console.log(res.data))
  }

  return (
    <>
      <button onClick={getCourses}>click me</button>
    </>
  );
}

export default App;
