import './styles/global.css';
import React, { useContext } from 'react';
import Context from './context';


function App() {

  const { courseData } = useContext(Context);

  // const getCourses = () => {
  //   fetch('http://localhost:5000/api/courses')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  return (
    <>
      <button onClick={() => console.log(courseData)}>click me</button>
    </>
  );
}

export default App;
