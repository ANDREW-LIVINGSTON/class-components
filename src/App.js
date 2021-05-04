import logo from './logo.svg';
import './App.css';
import People from './components/People'

function App() {
  return (
    <div className="App">
      <People name={"Doe, Jane"} age={45} color={"Black"}></People>
      <People name={"Smith, John"} age={88} color={"Brown"}></People>
      <People name={"Fillmore, Millard"} age={50} color={"Brown"}></People>
      <People name={"Smith, Maria"} age={62} color={"Brown"}></People>
    </div>
  );
}

export default App;
