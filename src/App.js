
import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
 // const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1> { title } </h1>
        <p>Liked { likes } times</p>
       
        {/* <p> { person } </p> */}

        <p>{ 10 } </p>
        <p>{ "hello, ninjas" } </p>
        <p>{ [1,2,3,4,5] } </p>
        <p>{ Math.random() * 20 }</p>

        <a href={link}> Google site </a>
      </div>
    </div>
  );
}

export default App;
