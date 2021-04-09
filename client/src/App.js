import logo from './logo.svg';
import './App.css';
// import api from '../../api';

function App() {

  const getCourses = () => {
    fetch('http://localhost:5000/api/courses')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
      <button onClick={getCourses}>click me</button>
    </>
  );
}

export default App;
